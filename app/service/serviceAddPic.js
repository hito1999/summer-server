'use strict';

const Service = require('egg').Service;

class ServiceAddPic extends Service {
  async InsertDatabase() {
    console.log('=================');
    const user = this.ctx.query.user;
    const title = this.ctx.query.title;
    const frequence = this.ctx.query.frequence;
    const time = this.ctx.query.time;
    const img = this.ctx.query.img;
    const result = await this.app.mysql.insert('mryday', { title,frequence,time,immg,user });
    if(result){
        this.ctx.body='success';
    }
    else{
        this.ctx.body='error';
    }
  }
}

module.exports = ServiceAddPic;
