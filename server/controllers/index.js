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

 // [ RowDataPacket {
 //    id: 50,
 //    text: 'Message1',
 //    date: 2017-03-04T04:54:05.000Z,
 //    id_users: 10,
 //    id_rooms: 200 } ]




module.exports = {
  // a function which handles a get request for all messages
  // ...classes/messages
  messages: {
    get: function (req, res) {
      var messages = models.messages.get(function(messages) {
        var obj = {
          results: messages
        };
        res.send(obj);
      });
    },

    // a function which handles posting a message to the database
    post: function (req, res) {
      var data = '';
      req.on('data', function(chunk) {
        data += chunk;
      });
      req.on('end', function() {
        var arr = data.split('&').join('=').split('=');
        var userData = {
          username: arr[1],
          text: arr[3],
          roomname: arr[5]
        };
          console.log('userData',userData);
          var message = models.messages.post(userData, function(messages) {
            res.send('Message posted!');
          });
      });
    }
  },

  // ...classes/users
  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
