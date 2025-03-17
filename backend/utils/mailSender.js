
let nodemailer = require("nodemailer")
require("dotenv").config()
let otp = require('../utils/otpGenerator')



let mailSender = async(otp) => {
 try {
            
let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,

  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS
  },
});

let info = await transporter.sendMail({
  from: "prince9b407@gmail.com",
  to: email,
  subject: "Otp",
  text: `your otp is: ${otp}`,
  html: "<b>Otp send successfully </b>",
});

} catch (error) {
     console.error(error)  
 }

}


module.exports= mailSender