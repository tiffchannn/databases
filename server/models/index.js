// exports.messages = require('./messages.js');
// exports.users = require('./users.js');

var db = require('../db/index.js');

module.exports = {
  messages: {
    get: (callback) => {
      // what do we want to do with getting messages
      let queryStr = 'SELECT * FROM messages';
      db.query(queryStr, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    },
    post: (params, callback) => {
      let {username, content, chatroomId} = params.body;
      let queryStr = `INSERT INTO messages (username, content, chatroom_id) VALUES ("${username}", "${content}", ${chatroomId})`;
      console.log('THIS IS THE PARAMS', params.body);
      db.query(queryStr, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    }
  },
  users: {
    get: (callback) => {
      let queryStr = 'SELECT username FROM messages';
      db.query(queryStr, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    }
    // post: (params, callback) => {
    //   // let {}
    // }
  }
};

