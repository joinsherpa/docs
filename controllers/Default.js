'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.cancelCard = function cancelCard (req, res, next, cardId) {
  Default.cancelCard(cardId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCard = function createCard (req, res, next, body) {
  Default.createCard(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
