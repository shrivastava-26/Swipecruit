let express = require('express')
let {addUser,fetchOneUser,fetchUser,updateUser,deleteUser} = require('../controller/userController')
let { verifyController,userLogin } = require("../controller/authController");

let routes = express.Router()


routes.post("/adduser", addUser);
routes.get('/getuser', fetchUser)
routes.get('/getoneuser/:uid', fetchOneUser)
routes.put('/updateuser/:uid', updateUser)
routes.delete('/deleteuser/:uid', deleteUser)
routes.post("/verifyuser", verifyController);
routes.post('/login', userLogin)

module.exports = routes


