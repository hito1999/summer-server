'use strict';

const Controller = require('egg').Controller;

class ControllerDeleteImg extends Controller {
  async controllerDeleteImg() {
    await this.service.serviceDeleteImg.DeleteDatabase();
  }
}
 
module.exports = ControllerDeleteImg;