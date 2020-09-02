'use strict';

const Service = require('egg').Service;

class ServiceSeekPic extends Service {
  async SeekDatabase() {
    console.log('=================');
    const user = this.ctx.query.user;
    const sel = await this.app.mysql.select('mryday', { // 搜索 post 表
        where: {user:user }, // WHERE 条件
        columns: ['user','img','title','frequence','time'], // 要返回的表字段
      });
    this.ctx.body=sel;
  }
}

module.exports = ServiceSeekPic;