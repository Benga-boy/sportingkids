const Subscription = require('../models/subscription')
const Email = require('../models/emails')
const sendgrid = require('@sendgrid/mail')
const { sendWelcomeEmail , sendUnsubscribeEmail } = require('../emails/account')


// * New subscriber function with sendgrid email function attached
async function subscribe(req, res) {
  try {
    const subscriber = await Subscription.create(req.body)
    await subscriber.save()
    sendWelcomeEmail(subscriber.email, subscriber.name)
    res.status(202).json({ message: `Hey ${subscriber.name} thanks for joining` })
  } catch (err) {
    res.status(422).json(err)
  }
}


// * Function to get all subscribers!
async function subscribeIndex(req, res) {
  try {
    const subscribedUsers = await Subscription.find()
    res.status(200).json(subscribedUsers)
  } catch (err) {
    res.json(err)
  }
}

// * Function to unsubscribe
async function unsubscribe(req, res) {
  const subId = req.params.id
  try {
    const userToUnsubscribe = await Subscription.findById(subId)
    if (!userToUnsubscribe) throw new Error('Not Found')
    await userToUnsubscribe.remove()
    sendUnsubscribeEmail(userToUnsubscribe.email, userToUnsubscribe.name)
    res.status(204)
  } catch (err) {
    res.status(404).json({ message: 'Not found' })
  }
}


// * Function to send email to all subscribers!!
async function mail(req, res) {
  try {
    const email = await Email.create(req.body)
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    sendgrid.setApiKey(SENDGRID_API_KEY)
    const msg = email
    sendgrid.sendMultiple(msg)
    console.log(msg)
    res.status(200).json({ message: 'Your Mails have been sent' })
  } catch (err) {
    res.status(422).json(err)
  }
}

module.exports = {
  subscribe,
  mail,
  subscribeIndex,
  unsubscribe
}