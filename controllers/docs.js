const Doc = require('../models/doc');

function index(req, res, next) {
  Doc
  .find()
  .then((docs) => res.json(docs))
  .catch(next);
}

function create(req, res, next) {
  Doc
  .create(req.body)
  .then((doc) =>
  res.status(201).json(doc))
  .catch(next);
}

module.exports = {
  index: index,
  create: create
};
