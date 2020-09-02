// 'use strict';

// const Controller = require('egg').Controller;

// class HomeController extends Controller {
//   async index() {
//     const { ctx } = this;
//     ctx.body = 'hi, egg';
//   }
// }

// module.exports = HomeController;

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    // 调用Service获取数据
    //const res = await ctx.service.student.index();
    //ctx.body = res;
    // 使用模板引擎
    await ctx.render("index.html");
  }
  
  // 新增方法
  async huangbaokang(){
    const { ctx } = this;
    ctx.body = "hello huangbaokang"; 
  }
}

module.exports = HomeController;

