### cofy-ioredis
[ioredis](https://github.com/luin/ioredis) co version

## Install
```shell
$ npm install cofy-ioredis
```

## Basic Start
```javascript
var Redis = require('cofy-ioredis');
var redis = new Redis(redisurl);

var result = yield redis.$set('foo', 'bar');
result = yield redis.$get('foo');

// Arguments to commands are flattened, so the following are the same:
yield redis.$sadd('set', 1, 3, 5, 7);
yield redis.$sadd('set', [1, 3, 5, 7]);

// All arguments are passed directly to the redis server:
redis.$set('key', 100, 'EX', 10);
```