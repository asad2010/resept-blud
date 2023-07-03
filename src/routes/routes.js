const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')
// get
router.get('/', controller.getAll)
router.get('/sorted', controller.sort)
router.get('/admin/sorted', controller.sortAdmin)

router.get('/admin', controller.admin)
router.get('/:id', controller.getTwo)
router.get('/admin/:id', controller.getOne)
router.get('/admin/edit/:id', controller.editPage)
router.get('/admin/delete/:id', controller.adminDelete)

// post
router.post('/admin/add', controller.adminAdd)
router.post('/admin/edit/:id', controller.edit)
router.post('/search', controller.search)


module.exports = router;


