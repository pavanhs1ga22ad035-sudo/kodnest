const data = require('../data');

module.exports = (req, res) => {
  res.status(200).json(data.dashboard);
};
