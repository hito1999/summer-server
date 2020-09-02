'use strict';

const Controller = require('egg').Controller;

class ControllerGetAlbum extends Controller {
  async controllerGetAlbum() {
    await this.service.serviceGetAlbum.GetDatabase();
  }
}
 
module.exports = ControllerGetAlbum;