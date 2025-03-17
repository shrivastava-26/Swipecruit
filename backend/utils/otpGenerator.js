
const otpGenerator = require("otp-generator");


let otpGen = () =>{

   let otp =  otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      digits:true
    });

    return otp

}


module.exports = otpGen