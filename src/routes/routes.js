const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')
// get
router.get('/', controller.getAll)
router.get('/sorted', controller.sort)

router.get('/:id', controller.getTwo)

// post

router.post('/search', controller.search)


module.exports = router;


