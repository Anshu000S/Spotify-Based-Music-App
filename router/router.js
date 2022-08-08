const express  = require('express');
const router   = express.Router();

const { getHey, getUser} = require('../controller/controller.js')

router.route('/').get(getHey);
router.route('/user').get(getUser);

module.exports = router