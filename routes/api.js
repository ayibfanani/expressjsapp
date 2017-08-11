var express = require('express');
var router = express.Router();

router.get('/test', (req, res, next) => {
  console.log('hello')
  res.json({'test': 'hello'});
})

module.exports = router;