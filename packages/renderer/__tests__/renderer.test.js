'use strict';

const renderer = require('..');
const assert = require('assert').strict;

assert.strictEqual(renderer(), 'Hello from renderer');
console.info("renderer tests passed");
