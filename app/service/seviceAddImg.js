'use strict';

const Service = require('egg').Service;

class ServiceAddImg extends Service {
  async InsertDatabase() {
    console.log('=================');
    const user = this.ctx.query.user;
    const img = this.ctx.query.img;
    const album = this.cxt.query.album;
    const result = await this.app.mysql.insert('album', { user,img,album });
    if(result){
        this.ctx.body='success';
    }
    else{
        this.ctx.body='error';
    }
  }
}

module.exports = ServiceAddImg;
