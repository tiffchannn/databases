// exports.messages = require('./messages.js');
// exports.users = require('./users.js');
var models = require('../models/index.js');

module.exports = {
  messages: {
    get: (req, res) => {
      models.messages.get((err, results) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    },
    post: (req, res) => {
      models.messages.post(req, (err, results) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    }
  },
  users: {
    get: (req, res) => {
      models.users.get(req, (err, results) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    }
  }
};