const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

const email = 'geelash90@gmail.com'

sgMail.setApiKey(sendgridAPIKey)

const message = {
  to: email,
  from: 'admin@sportingkids.co.uk',
  subject: 'Testing out email',
  text: 'I hope this works'
}

sgMail.send(message)
console.log(message)

