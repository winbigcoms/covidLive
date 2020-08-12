// const { createProxyMiddleware } = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
    app.use(createProxyMiddleware('/openapi', 
        { target: 'http://openapi.data.go.kr',changeOrigin: true }
    ));
    app.use(createProxyMiddleware('/v1', 
        { target: 'http://api.marktube.tv' ,changeOrigin: true}
    ));
}
// "proxy": {
//     "/openapi": {
//       "target": "http://openapi.data.go.kr"
//     },
//     "/v1": {
//       "target": "http://api.marktube.tv"
//     }
//   },