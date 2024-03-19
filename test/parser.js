var test = require('tap').test;
var CronParser = require('../lib/parser');

// Globals

test('no next date', function(t) {
  var options = {
    currentDate: new Date(2014, 0, 1),
    endDate: new Date(2014, 0, 1)
  };

  try {
    var interval = CronParser.parseExpression('* * 2 * *', options);
    t.equal(interval.hasNext(), false);
  } catch (err) {
    t.error(err, 'Parse read error');
  }

  t.end();
});
