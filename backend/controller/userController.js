let User = require("../models/user.model");

let addUser = async (req, res, next) => {
  try {
    let { name, username, email, password, confirmPassword } = req.body;

    let isUser = await User.findOne({ $or: [{ username }, { email }] });

    if (isUser) {
      return res
        .status(409)
        .json({ error: true, message: "User already exists" });
    }

    if (password != confirmPassword) {
      return res
        .status(400)
        .json({ error: true, message: "Enter valid username or password" });
    }
    let saveUser = await User.create({ name, username, email, password });
    return res.status(201).json({
      error: false,
      message: "user added successfully",
      data: saveUser,
    });
  } catch (error) {
    next(error);
  }
};

let fetchUser = async (req, res, next) => {
  try {
    let users = await User.find();
    return res.status(200).json({
      error: false,
      message: "users fetched successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

let fetchOneUser = async (req, res, next) => {
  try {
    let { uid } = req.params;
    let user = await User.findById(uid);

    if (!user) {
      return res.status(404).json({ error: true, message: "user not found" });
    }

    return res
      .status(200)
      .json({ error: false, message: "user fetched successfully", data: user });
  } catch (error) {
    next(error);
  }
};

let updateUser = async (req, res, next) => {
  try {
    let { uid } = req.params;
    let updatedUser = await User.findByIdAndUpdate(uid, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: true, message: "user not found" });
    }

    return res.status(200).json({
      error: false,
      message: "user updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

let deleteUser = async (req, res, next) => {
  try {
    let { uid } = req.params;
    let deletedUser = await User.findByIdAndDelete(uid);

    if (!deletedUser) {
      return res.status(404).json({ error: true, message: "user not found" });
    }

    return res.status(200).json({
      error: false,
      message: "user deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    next(error); 
  }
};

module.exports = { addUser, fetchUser, fetchOneUser, updateUser, deleteUser };
