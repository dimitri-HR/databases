var db = require('../db');

// console.log('db -------------------> ', db);



module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (cb) {
      console.log('SELECT * FROM messages;');
      var query = `SELECT messages.id, messages.text, messages.date, users.username, rooms.roomname
        FROM messages INNER JOIN users ON (users.id = messages.id_users)
        INNER JOIN rooms ON (rooms.id = messages.id_rooms);`;

      var results = [];



      db.query(query, (error, messages, fields) => {
        // if (error) throw error;
        // console.log('The solution is: ', messages);
        // console.log('The solution is: ', results[0].solution);
        messages.forEach(function(message) {
          results.push(message);
        });
        // results.push(messages[1]);

        // console.log('results', results[0]);

        cb(results);
      });

    },
    // a function which can be used to insert a message into the database
    post: function (post, cb) {

      // var username = 'User1';
      // var roomname = 'Room1';
      // var text = 'Text100';
// select user id
      // id_users = user id
      // var query = `INSERT INTO messages VALUES (null, 'TEXT', null,
      // (SELECT id FROM users WHERE username = 'User1'),
      // (SELECT id FROM rooms WHERE roomname = 'Room1'));`;

      var query = `INSERT INTO messages VALUES (null, '${post.text}', null,
      (SELECT id FROM users WHERE username = '${post.username}'),
      (SELECT id FROM rooms WHERE roomname = '${post.roomname}'));`;

      console.log('query', query);

      db.query(query, (error, messages, fields) => {
        if (error) throw error;
        cb();
      });

    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
