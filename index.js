'use strict';
var Redis = require('ioredis');
require('cofy').class(Redis);
module.exports = Redis;