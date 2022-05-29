"use strict";
exports.__esModule = true;
exports.wise_route = void 0;
var create_quote_1 = require("../handlers/wise/create_quote");
var create_recipient_1 = require("../handlers/wise/create_recipient");
var create_transfer_1 = require("../handlers/wise/create_transfer");
function wise_route(router) {
    return (router
        .post('/api/wise/create_quote', create_quote_1.create_quote)
        .post('/api/wise/create_recipient', create_recipient_1.create_recipient)
        .post('/api/wise/create_transfer', create_transfer_1.create_transfer));
}
exports.wise_route = wise_route;
