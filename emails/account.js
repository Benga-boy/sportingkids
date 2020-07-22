const sendgrid = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sendgrid.setApiKey(sendgridAPIKey)

const sportingkidsEmail = 'admin@sportingkids.co.uk'

const sendWelcomeEmail = (email, name) => {
  sendgrid.send({
    to: email,
    from: sportingkidsEmail,
    subject: 'Thanks for your subscription',
    text: `Hi ${name}, Thanks for joinging our mailing list. We will keep you updated with all our latest news!`
  })
}

const sendUnsubscribeEmail = (email, name) => {
  sendgrid.send({
    to: email,
    from: sportingkidsEmail,
    subject: 'Sorry to see you leave',
    text: `Hi ${name}, We are sorry to see you leave us and we hope to see you again soon`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendUnsubscribeEmail
}