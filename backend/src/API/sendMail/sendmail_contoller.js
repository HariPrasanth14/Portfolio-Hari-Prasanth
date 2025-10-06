// const {emailService} = require("../../utils/mail_service/mail_service")
const mailresend = require("../../utils/mail_service/resend")

exports.sendMail = async (req, res) => {
    try {
        const { name, email, message } = req.body

        // await emailService(name ,email,message)
        const content = `
            <!doctype html>
                <html lang="en">
                <head>
                    <title>Hari's Portfolio</title>
                </head>
                <body>
                    <div>
                        <h3>Message from ${name} </h3>
                        <p>${message}</p>
                    </div>
                </body>
                </html>
        `
        // return res.send(content)
        await mailresend({ content, email })
        res.status(200).json({ message: "Email send successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

