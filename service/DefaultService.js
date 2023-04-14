'use strict';


/**
 * Cancel an existing card
 *
 * cardId Integer ID of the card to be canceled
 * returns Card
 **/
exports.cancelCard = function(cardId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "number" : "number",
  "spendingLimit" : 1.4658129805029452,
  "isCancelled" : true,
  "expiryMonth" : 0.8008281904610115,
  "cardHolder" : {
    "firstName" : "firstName",
    "lastName" : "lastName"
  },
  "currency" : "usd",
  "id" : "id",
  "billingAddress" : {
    "country" : "country",
    "city" : "city",
    "state" : "state",
    "postal_code" : "postal_code",
    "line2" : "line2",
    "line1" : "line1"
  },
  "expiryYear" : 6.027456183070403,
  "type" : "mastercard"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new card
 *
 * body Card_body 
 * returns Card
 **/
exports.createCard = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "number" : "number",
  "spendingLimit" : 1.4658129805029452,
  "isCancelled" : true,
  "expiryMonth" : 0.8008281904610115,
  "cardHolder" : {
    "firstName" : "firstName",
    "lastName" : "lastName"
  },
  "currency" : "usd",
  "id" : "id",
  "billingAddress" : {
    "country" : "country",
    "city" : "city",
    "state" : "state",
    "postal_code" : "postal_code",
    "line2" : "line2",
    "line1" : "line1"
  },
  "expiryYear" : 6.027456183070403,
  "type" : "mastercard"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

