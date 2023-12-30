const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jamar.hodkiewicz61@ethereal.email',
            pass: 'vWjxnQ9QryVBm7GtJD'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"Kuzma02" <aleksandarkuzmanovic02@gmail.com>',
        to: 'jamar.hodkiewicz61@ethereal.email',
        subject: 'Hello',
        html: '<h2>Sending Emails With Node.js</h2>'
    });

    res.json(info);
}

module.exports = sendEmail;