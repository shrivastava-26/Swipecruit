const compareEncData = require("../utils/comapareEncData");
const encryptData = require("../utils/encryptData");
const mailSender = require("../utils/mailSender");
const otpGen = require("../utils/otpGenerator");
const Users = require("../models/user.model");
const jwt = require("jsonwebtoken");

let userLogin = async (req, res, next) => {
  
  try {
    let { username, password } = req.body;

    let isUser = await Users.findOne({
      $or: [{ username }, { email: username }],
    });


    if (isUser) {
      let isPassword = await compareEncData(password, isUser.password);

      if (isPassword) {
        let otp = await otpGen();
        let hashedOtp = await encryptData(otp);
        await Users.updateOne(
          { email: isUser.email },
          { $set: { otp: hashedOtp } }
        );
        await mailSender(isUser.email, `otp is: ${otp}`);

        res
          .status(201)
          .json({ success: true, message: "Otp send succeessfully" });
      }
      return res.status(401).json({ error: true, message: "invalid password" });
    }
    return res.status(404).json({ error: true, message: "User not found" });
  } catch (error) {
    next(error);
  }
};

let verifyController = async (req, res, next) => {
  try {
    let { otp, email } = req.body;

    let isUser = await Users.findOne({ email });

    if (isUser) {
      let dbOtp = await compareEncData(otp, isUser.otp);

      if (dbOtp) {
        let token = jwt.sign({ email: isUser.email }, "123", {
          expiresIn: "5m",
        });

        return res.status(201).json({
          success: true,
          message: "Logged in successfully",
          token,
        });
      }
      return res.status(401).json({ error: true, message: "Invalid otp" });
    }
    return res.status(404).json({ error: true, message: "user not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
  verifyController,
};
