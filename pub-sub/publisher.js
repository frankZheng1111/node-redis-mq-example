// 发布者
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
    setTimeout(() => {
      client.publish('queue-first','hi! first!');
      client.publish('queue-second','hi! second!');
    }, 5000);
  });
}

catch(e){
  console.error('err: ', e);
}
