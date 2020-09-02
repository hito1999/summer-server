'use strict';

const Service = require('egg').Service;

class ServiceDeleteImg extends Service {
  async DeleteDatabase() {
    console.log('=================');
    const user = this.ctx.query.user;
    const img = this.ctx.query.img;
    const album=this.ctx.query.album;
     const result=await this.app.mysql.delete('album', { 
         user:user,
        img:img,
        album:album
    });
    if(result){
        this.ctx.body="success";
    }
    else{
        this.ctx.body="error";
    }
  }
}

module.exports = ServiceDeleteImg;
