let bcrypt = require("bcryptjs")


let compareEncData = async(data, hashedData) => {

    return await bcrypt.compare(data, hashedData)
}

module.exports = compareEncData