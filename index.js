'use strict';

var events    = require('events');
var logger = require('tracer').colorConsole();
var fs = require('fs');

class Oversee {

    constructor(){
      
    }

}

Oversee.prototype.__proto__ = events.EventEmitter.prototype;
module.exports = Oversee;
