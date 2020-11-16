import * as redis from 'redis';

const client = redis.createClient(6379,"localhost");
client.on('connect', function() {
  console.log('connected');
  
  client.set("mykey","Zekiri Abdelali");
  
  client.get('mykey', function(err, value) {
    console.log(value);
  });
  
  
  client.del('mykey', function(err, result) {
    console.log(result);
  });

});
