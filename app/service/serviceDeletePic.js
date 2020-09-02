'use strict';

const Service = require('egg').Service;

class ServiceDeletePic extends Service {
  async DeleteDatabase() {
    console.log('=================');
    const user = this.ctx.query.user;
    const img = this.ctx.query.img;
     const result=await this.app.mysql.delete('mryday', { 
         user:user,
        img:img 
    });
    if(result){
        this.ctx.body="success";
    }
    else{
        this.ctx.body="error";
    }
  }
}

module.exports = ServiceDeletePic;
