// 订阅者
//
'use strict';

const redis =  require('redis');

const HOST = '127.0.0.1';
const PORT = 6379;

try{
  let client = redis.createClient(PORT, HOST);
  console.log('waiting for messages...');

  client.on('error', (err) => {
    console.error('err: ', err);
  });

  client.on('subscribe', (channel,count) => {
    console.log('channel: ', channel, ', count: ', count);
  });

  client.on('message', (channel,message) => {
    console.log('channel: ', channel, ', msg: ', message);
  });

  client.on('unsubscribe', (channel,count) => {
    console.log('channel: ', channel, ', count:', count);
  });

  client.subscribe('queue-first');
} catch(e){
  console.error('err:'+e);
}
