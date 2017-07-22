module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://localhost/reedsy-challenge',
  port: process.env.PORT || 4000
};
