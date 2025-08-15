const {emailService} = require("../utils/mail_service/mail_service")

exports.sendMail = async(req,res)=>{
    try{
        const {name , email , message } = req.body
         
        await emailService(name ,email,message)
        res.status(200).json({message:"Email send successfully"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

