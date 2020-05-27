"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarioRoutes = express_1.Router();
usuarioRoutes.post('/', function (req, res) {
    var post = req.body();
    console.log(post);
    return res.json({
        ok: true,
        mensaje: post
    });
});
usuarioRoutes.post('/', function (req, res) {
    var body = req.body;
    return res.status(200).json({
        ok: true,
        body: body
    });
});
exports.default = usuarioRoutes;
