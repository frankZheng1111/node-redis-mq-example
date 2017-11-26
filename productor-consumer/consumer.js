// 生产者
//
'use strict';

const redis = require('redis');

const HOST = '127.0.0.1';
const PORT = 6379;

try{
  let client = redis.createClient(PORT, HOST);
  console.log('waiting for publish messages...');

  client.on('error', (err) => {
    console.error('err: ', err);
  });

  client.on('ready', () => {
    let clientBlocking = client.duplicate();
    function brpop() {
      clientBlocking.brpop("MSGQ", 0, function(err, reply) {
        console.log(reply);
        brpop();
      });
    };
    brpop();
  });
} catch(e) {
  console.error('err: ', e);
}
