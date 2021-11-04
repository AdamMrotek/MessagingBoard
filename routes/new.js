var express = require('express');
var router = express.Router();
const messages = require("./messages")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new',{ title: 'New'});
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  messages.push({text:req.body.text, user:req.body.user, added: new Date()});
  res.redirect('/');
});

module.exports = router;
