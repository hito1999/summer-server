// app\service\serviceRegister.js
'use strict';

const Service = require('egg').Service;

class ServiceRegisterService extends Service {
  async InsertDatabase() {
    console.log('=================');
    const username = this.ctx.query.username;
    const password = this.ctx.query.password;
    // await this.app.mysql.insert('user', { username, password });
    console.log(username + '......'  + password);
    this.ctx.body=this.ctx.query;
  }
}

module.exports = ServiceRegisterService;


