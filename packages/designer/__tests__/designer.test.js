'use strict';

const designer = require('..');
const assert = require('assert').strict;

assert.strictEqual(designer(), 'Hello from designer');
console.info("designer tests passed");
