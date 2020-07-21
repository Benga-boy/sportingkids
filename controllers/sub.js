const Subscription = require('../models/subscription')
const Email = require('../models/emails')
const subscribers = []
const sendgrid = require('@sendgrid/mail')

async function subscribe(req, res) {
  try {
    const subscriber = await Subscription.create(req.body)
    await subscribers.push(subscriber)
    res.status(202).json({ message: `Hey ${subscriber.name} thanks for joining` })
    console.log(subscribers)
  } catch (err) {
    res.status(422).json(err)
  }
}

async function subscribeIndex(req, res) {
  try {
    const subscribedUsers = await Subscription.find()
    res.status(200).json(subscribedUsers)
  } catch (err) {
    res.json(err)
  }
}

async function mail(req, res) {
  try {
    const email = await Email.create(req.body)
    const SENDGRID_API_KEY = 'SG.Aia-sww2Qw64NTff09NUEQ.a1FAd6EEFZICt303ereWEPwcQ1PdGPSF3bQSj-cCbZQ'
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
  subscribeIndex
}