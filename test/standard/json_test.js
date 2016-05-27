'use strict';

var json = require('../../lib' + (process.env.COVERAGE || '') + '/standard/json.js'),
    stream = require('../../lib' + (process.env.COVERAGE || '') + '/stream/streams.js');
    
/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['json'] = {
  setUp: function(done) {
    done();
  },
    
  'number accepted': function(test) {
    test.expect(1);
    // tests here
    test.ok(json.parse(stream.ofString('123'), 0).isAccepted(), 
            'should be accepted.');
    test.done();
  },
    
  'string accepted': function(test) {
    test.expect(1);
    // tests here
    test.ok(json.parse(stream.ofString('"123"'), 0).isAccepted(), 
            'should be accepted.');
    test.done();
  },
    
  'null accepted': function(test) {
    test.expect(1);
    // tests here
    test.ok(json.parse(stream.ofString('null'), 0).isAccepted(), 
            'should be accepted.');
    test.done();
  },
    
  'true accepted': function(test) {
    test.expect(1);
    // tests here
    test.ok(json.parse(stream.ofString('true'), 0).isAccepted(), 
            'should be accepted.');
    test.done();
  },
    
  'false accepted': function(test) {
    test.expect(1);
    // tests here
    test.ok(json.parse(stream.ofString('false'), 0).isAccepted(), 
            'should be accepted.');
    test.done();
  },
    
  'empty array accepted': function(test) {
    test.expect(1);
    // tests here
    test.ok(json.parse(stream.ofString('[ ]'), 0).isAccepted(), 
            'should be accepted.');
    test.done();
  },
    
  'singleton array accepted': function(test) {
    test.expect(1);
    // tests here
    test.ok(json.parse(stream.ofString('[ 123 ]'), 0).isAccepted(), 
            'should be accepted.');
    test.done();
  },
    
  'multi element array accepted': function(test) {
    test.expect(1);
    // tests here
    test.ok(json.parse(stream.ofString('[ 123 , 234 ]'), 0).isAccepted(), 
            'should be accepted.');
    test.done();
  },
    
  'empty object accepted': function(test) {
    test.expect(1);
    // tests here
    test.ok(json.parse(stream.ofString('{ }'), 0).isAccepted(), 
            'should be accepted.');
    test.done();
  },
    
  'singleton object accepted': function(test) {
    test.expect(1);
    // tests here
    test.ok(json.parse(stream.ofString('{ "a" : "v" }'), 0).isAccepted(), 
            'should be accepted.');
    test.done();
  },
    
  'multi element object accepted': function(test) {
    test.expect(1);
    // tests here
    test.ok(json.parse(stream.ofString('{ "a" : "v", "a" : [] }'), 0).isAccepted(), 
            'should be accepted.');
    test.done();
  },

};