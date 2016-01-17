'use strict';
var co = require('co');
var redis = require('../');
var redisClient = new redis('redis://localhost:6379');
describe("cofy-ioredis", function() {

	it("#$set $get", function(done) {
		co(function*() {
			yield redisClient.$set('k1', 'v1');
			var v = yield redisClient.$get('k1');
			v.should.equal('v1');
			yield redisClient.$del('k1');
			done();
		})
	});

	// it("#$setJson $getJson", function(done) {
	// 	co(function*() {
	// 		yield redisClient.$setJson('json', {name: 1});
	// 		var v = yield redisClient.$getJson("json");
	// 		v.should.equal({name: 1});
	// 		yield redisClient.$del("json");
	// 		done();
	// 	})
	// })

});