var http = require('http'),
    qs = require('querystring'),
    os = require('os');

var params = {
  teamcode: "${code}",
},

options = {
  host: 'nodeknockout.com',
  port: 80,
  path: '/deploys?' + qs.stringify(params)
};

http.get(options)
  .on('response', function (res) {
    if (callback) callback(null, res); 
 })
  .on('error', function (err) { 
    if (callback) callback(err); 
 })
