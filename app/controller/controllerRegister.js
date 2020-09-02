'use strict';

const Controller = require('egg').Controller;

class ControllerRegisterController extends Controller {
  async controllerRegister() {
    // await this.ctx.render('register');
    await this.service.serviceRegister.InsertDatabase();
  }
}
 
module.exports = ControllerRegisterController;


