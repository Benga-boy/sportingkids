const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

const email = 'admin@sportingkids.co.uk'

sgMail.setApiKey(sendgridAPIKey)

const message = {
  to: email,
  from: email,
  subject: 'New Sporting Kids enquiry',
  text: 'Testing, 123'
}

sgMail.send(message)
console.log(message)

