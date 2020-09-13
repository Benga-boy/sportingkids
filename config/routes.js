/* eslint-disable no-unused-vars */
const router = require('express').Router()
const event = require('../controllers/event')
const auth = require('../controllers/auth')
const sub = require('../controllers/sub')
const secureRoute = require('../lib/secureRoute')
// const multer = require('multer')
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, './uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname)
//   }
// })

// // ? Image Uploads
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 3000000
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
//       return cb(new Error('Please upload a PNG, JPG or JPEG image'))
//     }
//     cb(undefined, true)
//   }
// })



router.route('/events')
  .get(event.index)
  .post(event.create)

router.route('/events/:id')
  .get(event.show)
  .put(secureRoute, event.update)
  .delete(secureRoute, event.delete)

// router.route('/events/:id/image')
//   .post(secureRoute, upload.single('image'), event.uploadImage)


router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/subscribe')
  .get(sub.subscribeIndex)
  .post(sub.subscribe)

router.route('/subscribe/:id')
  .delete(sub.unsubscribe)

router.route('/mail')
  .post(sub.mail)








//   }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
//   })

// router.route('/events/:id/image')
//   .delete( async (req, res) => {
//     const eventId = req.params.id
//     const event = await Event.findById(eventId)
//     event.image = undefined
//     await event.save()
//     res.send()
//   }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
//   })

// router.route('/events/:id/image')
//   .get( async (req, res) => {
//     try {
//       const eventId = req.params.id
//       const event = await Event.findById(eventId)

//       if (!event || !event.image) {
//         throw new Error()
//       }
//       res.set('Content-Type', 'image/jpeg')
//       res.send(event.image)

//     } catch (err) {
//       res.status(404).send()
//     }
//   })


module.exports = router