module.exports = {
  // apps : [{
  //   script: 'index.js',
  //   watch: '.'
  // }, {
  //   script: './service-worker/',
  //   watch: ['./service-worker']
  // }],

  deploy : {
    production : {
      user : 'learn',
      host : '101.200.127.218',
      ref  : 'origin/master',
      repo : 'git@github.com:LearnAnythingCn/learn-anything.cn.git',
      // gitee
      // repo : 'git@gitee.com:learn-anything/learn-anything.cn.git',
      path : '/home/learn/learn-anything.cn',
      // 'pre-deploy-local': '',
      // 'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'post-deploy' : 'ls -la',
      // 'pre-setup': ''
    }
  }
};
