const router = require('express').Router()
const event = require('../controllers/event')
const auth = require('../controllers/auth')
const sub = require('../controllers/sub')
const secureRoute = require('../lib/secureRoute')
const multer = require('multer')


router.route('/events')
  .get(event.index)
  .post(secureRoute, event.create)

router.route('/events/:id')
  .get(event.show)
  .put(secureRoute, event.update)
  .delete(secureRoute, event.delete)

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


const upload = multer({
  dest: 'events-image',
  limits: {
    fileSize: 2000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error('Please upload a PNG, JPG or JPEG image'))
    }
    cb(undefined, true)
  }
})
router.route('/events/image')
  .post(upload.single('image'), (req, res) => {
    
    res.send()
  }, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  })




module.exports = router