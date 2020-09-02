'use strict';

const Service = require('egg').Service;

class ServiceSigninService extends Service {
  async SeekDatabase() {
    console.log('=================');
    const username = this.ctx.query.username;
    const password = this.ctx.query.password;
     const sel=await this.app.mysql.get('user', { username, password });
    if(sel)
    {
        this.ctx.body="success";
    }
    else
    {   
        this.ctx.body="error";
    }
  }
}

module.exports = ServiceSigninService;
