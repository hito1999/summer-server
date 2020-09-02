'use strict';

const Controller = require('egg').Controller;

class ControllerDeletePic extends Controller {
  async controllerDeletePic() {
    await this.service.serviceDeletePic.DeleteDatabase();
  }
}
 
module.exports = ControllerDeletePic;