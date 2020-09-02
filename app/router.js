// app\router.js
'use strict';

const { Controller } = require("egg");

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/mryday/login/', controller.controllerRegister.controllerRegister);
  router.get('/mryday/signin/',controller.controllerSignin.controllerSignin);
  router.post('/mryday/addpic/',controller.controllerAddPic.controllerAddPic);
  router.get('/mryday/seekpic/',controller.controllerSeekPic.controllerSeekPic);
  router.post('/mryday/deletepic/',controller.controllerDeletePic.controllerDeletePic);
  router.post('/album/addimg/',controller.controllerAddImg.controllerAddImg);
  router.post('/album/deleteimg/',controller.controllerDeleteImg.controllerDeleteImg);
  router.get('/album/getalbum/',controller.controllerGetAlbum.controllerGetAlbum);
};

