"use strict";
exports.__esModule = true;
var itty_router_1 = require("itty-router");
var wise_1 = require("./routes/wise");
var router = (0, itty_router_1.Router)();
(0, wise_1.wise_route)(router);
addEventListener('fetch', function (event) {
    event.respondWith(router.handle(event.request));
});
