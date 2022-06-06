const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sablepankaj190@gmail.com',
        subject: 'Welcome to Task manager application',
        text: `Welcome to the app, ${name}. Hope you find our services valuable.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sablepankaj190@gmail.com',
        subject: 'Regarding email cancellation',
        text: `Hi, ${name}. Hope you find our services valuable. If there is anything we can help before
        cancellation please let us know. We would love to hear feedback from you and work upon it.`
    })
}

module.exports = { sendWelcomeEmail, sendCancellationEmail }