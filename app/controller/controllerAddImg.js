'use strict';

const Controller = require('egg').Controller;

class ControllerAddImg extends Controller {
  async controllerAddImg() {
    await this.service.serviceAddImg.InsertDatabase();
  }
}
 
module.exports = ControllerAddImg;
