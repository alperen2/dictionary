const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://od-api.oxforddictionaries.com:443',
      changeOrigin: true,
    })
  );
};

console.log(1)