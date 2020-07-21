const Event = require('../models/event')
const { notFound, unauthorized } = require('../lib/errorMessages')


async function eventIndex(req, res, next) {
  try {
    const event = await Event.find()
    if (!event) throw new Error(notFound)
    res.status(200).json(event)
  } catch (err) {
    next(err)
  }
}

async function eventCreate(req, res, next) {
  try {
    req.body.user = req.currentUser
    const createdEvent = await Event.create(req.body)
    res.status(201).json(createdEvent)
  } catch (err) {
    next(err)
  }
}

async function eventShow(req, res, next) {
  const eventId = req.params.id
  try {
    const event = await Event.findById(eventId)
    if (!event) throw new Error(notFound)
    res.status(200).json(event)
  } catch (err) {
    next(err)
  }
}

async function eventUpdate(req, res, next) {
  const eventId = req.params.id
  try {
    const event = await Event.findById(eventId)
    if (!event) throw new Error(notFound)
    if (!event.user.equals(req.currentUser._id)) throw new Error(unauthorized)
    Object.assign(event, req.body)
    await event.save()
    res.status(202).json(event)
  } catch (err) {
    next(err)
  }
}

async function eventDelete(req, res, next) {
  const eventId = req.params.id
  try {
    const eventToDelete = await Event.findById(eventId)
    if (!eventToDelete) throw new Error(notFound)
    if (!eventToDelete.user.equals(req.currentUser._id)) throw new Error(unauthorized)
    await eventToDelete.remove()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

// async function

module.exports = {
  index: eventIndex,
  create: eventCreate,
  show: eventShow,
  update: eventUpdate,
  delete: eventDelete
}