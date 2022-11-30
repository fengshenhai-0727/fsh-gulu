'use strict';

const guluCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(guluCli(), 'Hello from guluCli');
console.info("guluCli tests passed");
