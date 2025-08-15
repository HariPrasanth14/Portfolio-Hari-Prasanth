const nodeMailer = require("nodemailer")

const emailService = async(name ,from , message)=>{
    try{
        const transporter = nodeMailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        })

        const mailOptions = {
            from,
            replyTo: "srihariprasanth123@gmail.com",
            to:"srihariprasanth123@gmail.com",
            subject:`Message from ${name} - Portfolio`,
            text:`Name:${name} \nFrom:${from} \nMessage:${message}`
        }

        await transporter.sendMail(mailOptions)
        console.info(`email send successfull to ${mailOptions.to} `)    
        
    }catch(err){
            console.error(err.message)
    }
}

module.exports = { emailService }