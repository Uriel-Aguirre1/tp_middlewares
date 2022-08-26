const router = require('express').Router();
const { index, contact, music, about, admin, login, noEntry } = require('../controllers/mainController');
const accessAdmin = require('../middlewares/accessAdmin')
router
     .get('/', index)
     .get('/about', about)
     .get('/contact', contact)
     .get('/music', music)
     .get('/admin', accessAdmin, admin)
     .get('/login', login)
     .get('/noEntry', noEntry)

module.exports = router