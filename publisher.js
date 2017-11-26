// 发布者
//
'use strict';

import redis from 'redis';

const HOST = '127.0.0.1';

try{   
  let client = redis.createClient(6379, HOST);

  client.on('error', (err) => {
    console.error('err'+err);
  });

  client.on('ready', () => {
    client.publish('testFirst','hi! first!');
    client.publish('testSecond','hi! second!');
    client.end();
  });
}

catch(e){
  console.error('err: ', e);
}
