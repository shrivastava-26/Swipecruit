

let multer = require('multer')


let fileUpload = () => {

    //! multer is a middleware to send data from client to local server
    //todo multer.diskStorage return a object with two objects
    //firstOne - destination where media is going to store
    //secondOne - fileName of media files

    let fileStorage = multer.diskStorage({

        destination: (req,file,cb)=>{
            cb(null, './public/images/')
        },
        filename:(req,file,cb)=>{
            cb(null, file.originalname)
        }
    })

    return multer({storage:fileStorage})


}

module.exports = fileUpload