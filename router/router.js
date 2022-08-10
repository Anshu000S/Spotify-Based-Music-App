const express  = require('express');
const router   = express.Router();

const { getHey, getUser, authToken, getPlaylist } = require('../controller/controller.js')

router.route('/').get(getHey);
router.route('/user').get(getUser);
router.route('/auth').get(authToken);
router.route('/userPlaylist').get(getPlaylist);
module.exports = router