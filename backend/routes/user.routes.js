let express = require('express')
let {addUser,fetchOneUser,fetchUser,updateUser,deleteUser} = require('../controller/userController')
let { verifyController,userLogin } = require("../controller/authController");
const fileUpload = require('../utils/fileUpload');

let routes = express.Router()

let upload = fileUpload()


routes.post("/adduser", upload.single('profile'),addUser); 
routes.get('/getuser', fetchUser)
routes.get('/getoneuser/:uid', fetchOneUser)
routes.put('/updateuser/:uid', updateUser)
routes.delete('/deleteuser/:uid', deleteUser)
routes.post("/verifyuser", verifyController);
routes.post('/login', userLogin)

module.exports = routes


