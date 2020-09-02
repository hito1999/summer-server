'use strict';

const Service = require('egg').Service;

class ServiceGetAlbum extends Service {
  async GetDatabase() {
    console.log('=================');
    const user = this.ctx.query.user;
    const album=this.ctx.query.album;
    const sel = await this.app.mysql.select('album', { // 搜索 post 表
        where: {user:user,album:album }, // WHERE 条件
        columns: ['user','img','album'], // 要返回的表字段
      });
      if(sel)
      {
        this.ctx.body=sel;
      }
      else{
          this.ctx="error";
      }
  }
}

module.exports = ServiceGetAlbum;