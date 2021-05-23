const express = require('express');
const router = express();
const controller = require('../controller/index.js');
const multer = require('multer');
const upload = multer({ dest: 'public/img/' });

router.get('/', controller.getLogIn);
router.get('/signup', controller.getSignUp);
router.post('/signup', controller.postSignUp);
router.post('/signin', controller.postLogIn);
router.get('/profile/:email', controller.getProfile);
router.post('/edit/editUpdate/:email', controller.updateEditProfile);
router.get('/edit/:email', controller.getEditProfile);
router.get('/timeline/:email', controller.getTimeline);
router.post('/timeline', controller.myTimeline);
router.post('/createPost/:email', upload.single('avatar'), controller.createPost);
router.get('/edit/deleteAcc/:email', controller.deleteAcc);
router.get('/deletePosts/:_id', controller.deletePost);

// router.post('/timeline/:email', postUpload, controller.createPost);

module.exports = router;
