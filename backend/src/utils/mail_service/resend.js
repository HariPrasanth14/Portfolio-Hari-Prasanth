const { Resend } = require("resend")

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

const mailResend = async ({ content, email }) => {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'ajay693singh@gmail.com',
            subject: `portfolio - Email From ${email}`,
            html: content
        });
        console.info("Email sent successfully using Resend");
    } catch (err) {
        console.error(err.message)
    }
}

module.exports = mailResend