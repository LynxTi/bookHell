var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('acp');
});

router.get('/genre', (req, res, next)  => {
  res.render('acp');
});

router.post('/genre', upload.none, (req, res, next)  => {
  res.render('acp');
});

router.get('/author', (req, res, next)  => {
  res.render('acp-ahtor');
});

router.post('/author', upload.none, (req, res, next) => {
  console.log(123);
  console.log(req);
  
});

router.get('/book', (req, res, next)  => {
  res.render('acp');
});   

module.exports = router;
