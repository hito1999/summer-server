'use strict';

const Controller = require('egg').Controller;

class ControllerAddPic extends Controller {
  async controllerAddPic() {
    await this.service.serviceAddPic.InsertDatabase();
  }
}
 
module.exports = ControllerAddPic;
