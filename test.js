"use strict";

var test = require('tape');
var currentDir = require('./');

test('exist', function(t) {
    t.equal(typeof currentDir, 'function');
    t.end();
});

test('do nothing', function(t) {
    t.equal(currentDir(), process.cwd());
    t.end();
});
