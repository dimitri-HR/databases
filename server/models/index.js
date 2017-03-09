var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (cb) {
      console.log('SELECT * FROM messages;');

      var query = `SELECT messages.id, messages.text, messages.date, users.username, rooms.roomname
        FROM messages INNER JOIN users ON (users.id = messages.id_users)
        INNER JOIN rooms ON (rooms.id = messages.id_rooms)
        ORDER by messages.id desc;`;

      db.query(query, (err, results) => {
        results = {results: results};

        cb(err, results);
      });

    },
    // a function which can be used to insert a message into the database
    post: function (params, cb) {

      // var username = 'User1';
      // var roomname = 'Room1';
      // var text = 'Text100';
// select user id
      // id_users = user id
      // var query = `INSERT INTO messages VALUES (null, 'TEXT', null,
      // (SELECT id FROM users WHERE username = 'User1'),
      // (SELECT id FROM rooms WHERE roomname = 'Room1'));`;

      var query = `INSERT INTO messages (id_users, text, id_rooms)
      VALUES ((SELECT id FROM users WHERE username = ? limit 1), ?,
      (SELECT id FROM rooms WHERE roomname = ? limit 1));`;

      // (null, '${params.text}', null,
      // (SELECT id FROM users WHERE username = '${params.username}'),
      // (SELECT id FROM rooms WHERE roomname = '${params.roomname}'));`;

      console.log('query', query);
      console.log('params', params);
      db.query(query, params, (error, results) => {
        cb(error, results);
      });

    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      console.log('SELECT * FROM users');
      var query = 'SELECT * FROM users';
      db.query(query, (err, results) => {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      console.log('PARAMS should be user', params);
      var query = 'INSERT INTO users(username) VALUE (?)';
      db.query(query, params, (error, results) => {
        callback(error, results);
      });
    }
  }
};


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
