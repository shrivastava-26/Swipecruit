let {model,Schema} = require("mongoose")

//file
//eduction object
//compny object
//request array
//matches array

let userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profile:{
      type:String,
      required:true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 16,
    },
    otp:{
      required:true,
      default:"000000",
      type:String
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema)
