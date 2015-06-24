/**
 * Run `node import.js` to import the sample data into the db.
 */

var async = require('async');

// sample data
var graphData = require('./data.json');
var flags = require('./flag.json');


module.exports = function(app, cb) {
  var Data = app.models.Data;
  var Flag = app.models.Flag;
  var db = app.dataSources.db;

  var ids = {
  };

  function importData(Model, data, cb) {
    // console.log('Importing data for ' + Model.modelName);
    Model.destroyAll(function(err) {
      if (err) {
        cb(err);
        return;
      }
      async.each(data, function(d, callback) {
        if (ids[Model.modelName] === undefined) {
          // The Oracle data has Location with ids over 80
          // and the index.html depends on location 88 being present
          ids[Model.modelName] = 80;
        }
        d.id = ids[Model.modelName]++;
        Model.create(d, callback);
      }, cb);
    });
  }

  async.series([
    function(cb) {
      db.autoupdate(cb);
    },
    importData.bind(null, Data, graphData),
    importData.bind(null, Flag, flags)
  ], function(err/*, results*/) {
    cb(err);
  });
};

if (require.main === module) {
  // Run the import
  module.exports(require('../server'), function(err) {
    if (err) {
      console.error('Cannot import sample data - ', err);
    } else {
      console.log('Sample data was imported.');
    }
  });
}
