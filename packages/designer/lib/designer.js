'use strict';

const renderer = require("@page-jimu/generator")
const generator = require("@page-jimu/generator")

function designer() {
  console.log("designer")
  renderer()
  generator()
}

designer()

module.exports = designer;
