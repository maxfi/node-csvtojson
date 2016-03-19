var util = require('util');
var Transform = require('stream').Transform;
var EOL = require('os').EOL;
util.inherits(AddNewLine, Transform);

function AddNewLine(options) {
  if (!(this instanceof AddNewLine))
    return new AddNewLine(options);

  Transform.call(this, options);
}

AddNewLine.prototype._transform = function(chunk, encoding, done) {
  this.push(chunk + EOL);
  done();
};

AddNewLine.prototype._flush=function(cb){
  this.push(null);
  cb();
};

module.exports = AddNewLine;