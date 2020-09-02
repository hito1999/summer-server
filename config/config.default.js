// /* eslint valid-jsdoc: "off" */

// 'use strict';

// /**
//  * @param {Egg.EggAppInfo} appInfo app info
//  */
// module.exports = appInfo => {
//   /**
//    * built-in config
//    * @type {Egg.EggAppConfig}
//    **/
//   const config = exports = {};

//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + ' ';


//   config.mysql = {
//     client:{
//       host: 'localhost',
//       port: '3306',
//       user: 'root',
//       password: '123456',
//       database: 'summer'
//     }
//   };

//   config.view = {
//     // defaultViewEngine: '.ejs',

//     mapping: {
//       '.html':'ejs',
//     },
//   };
//   // // add your middleware config here
//   // config.middleware = [];

//   // // add your user config here
//   // const userConfig = {
//   //   // myAppName: 'egg',
//   // };

//   return {
//     ...config,
//     // ...userConfig,
//   };
// };


//config\config.default.js
'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + ' ';
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'summer',
    },
  };
  config.view = {
    defaultViewEngine: '.ejs',

    mapping: {
      '.html': 'ejs',
    },
  };

  return {
    ...config,
  };

};

