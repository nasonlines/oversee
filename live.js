'use strict';

var events    = require('events');
var logger    = require('tracer').colorConsole();
var fs        = require('fs');

class OverseeLive {

    constructor(){
      
    }

}

OverseeLive.prototype.__proto__ = events.EventEmitter.prototype;
module.exports = OverseeLive;
