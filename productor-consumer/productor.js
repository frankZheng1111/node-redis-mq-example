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
    setTimeout(() => {
      client.lpush('MSGQ', 'hi! first!', (err, reply) => { 
        if (err) {
          console.log('lpush message error: ', err);
        } else {
          console.log('lpush message success');
        }
      });
    }, 5000);

    setTimeout(() => {
      client.lpush('MSGQ', 'hi! second!', (err, reply) => { 
        if (err) {
          console.log('lpush message error: ', err);
        } else {
          console.log('lpush message success');
        }
      });
    }, 10000);
  });
} catch(e) {
  console.error('err: ', e);
}
