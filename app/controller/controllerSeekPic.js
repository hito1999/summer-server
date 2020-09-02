'use strict';

const Controller = require('egg').Controller;

class ControllerSeekPic extends Controller {
  async controllerSeekPic() {
    await this.service.serviceSeekPic.SeekDatabase();
  }
}
 
module.exports = ControllerSeekPic;