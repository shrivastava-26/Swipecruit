let bcrypt = require("bcryptjs")


let encryptData = async (data) => {

        let salt = await bcrypt.genSalt(10);
        let hashedData = await bcrypt.hash(data, salt);

        return hashedData
}

module.exports = encryptData