var test = require('tap').test;
var RequestToken = require('../src/RequestToken.js');
console.log(RequestToken);

var rt = new RequestToken();

test('request token', function(t){
   t.plan(1);

   t.equals(rt.name , rt.leg[0], 'request token name')

})
