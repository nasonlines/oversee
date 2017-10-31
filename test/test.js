var Should = require('chai').should();
var Oversee = require('../index.js')
var Database = require('better-sqlite3');

function generatePath() {
  var faker = require('faker');
  var nb_subdir = Math.floor(Math.random() * 20) + 1
  var subdir = ""
  for (var i = 0; i < nb_subdir; i++){
    subdir = subdir + "/" + faker.commerce.productAdjective();
  }
  return (subdir)
}

describe('Start Oversee', function() {
  beforeEach(function(done){
    var mkdirp = require('mkdirp');
    var faker = require('faker');
    var createFile = require('create-file');
    var path = "C:/Users/"+faker.internet.userName();

    for (var i = 0; i < 1; i++){
      let newpath = path+generatePath();
      mkdirp('test/'+newpath, function (err) {
        createFile('test/'+newpath+'/'+faker.system.commonFileName(), faker.lorem.paragraphs()+'\n', function (err) {
        });
      });
    }
    done();
  });
  afterEach(function(done){
    const del = require('del');

    del(['test/C:/**/*']).then(paths => {
      done();
    });
  });


  it('someTest', function() {

  });

})
