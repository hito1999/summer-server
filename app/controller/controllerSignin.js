'use strict';

const Controller = require('egg').Controller;

class ControllerSigninController extends Controller {
  async controllerSignin() {
    await this.service.serviceSignin.SeekDatabase();
  }
}
 
module.exports = ControllerSigninController;
