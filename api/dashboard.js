const data = require('../data');

module.exports = (req, res) => {
  res.status(200).json({
    hero: data.hero,
    liveSessions: data.liveSessions,
    selfPaced: data.selfPaced
  });
};
