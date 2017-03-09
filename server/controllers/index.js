var models = require('../models');

// models.messages = {
//   results: [ {
//   username: 'testuser',
//   text: 'Some text - Dimitri',
//   roomname: 'lobby'
//   },
//   {
//   username: 'testuser',
//   text: 'Some text',
//   roomname: 'lobby'
// }]};

// The solution is:
var results = models.messages;
console.log('Controllers models.messages', models.messages);

module.exports = {
  // a function which handles a get request for all messages
  // ...classes/messages
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { console.error(err); }
        res.json(results);
      });
    },

    // a function which handles posting a message to the database
    post: function (req, res) {
      var params = [req.body.username, req.body.text, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });

      // var data = '';

      // req.on('data', function(chunk) {
      //   data += chunk;
      // });

      // req.on('end', function() {
      //   var arr = data.split('&').join('=').split('=');
      //   var userData = [
      //     arr[1],
      //     arr[3],
      //     arr[5]
      //   ];

      //   models.messages.post(userData, function(err, results) {
      //     if (err) { console.error(err); }
      //     res.sendStatus(201);
      //   });

      // });
    }

  },

  // ...classes/users
  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { console.error(err); }
        res.json(results);
      });
    },

    post: function (req, res) {
      var params = [req.body.username];
      console.log('Params', params);
      models.users.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  }
};
