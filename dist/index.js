"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./clases/server"));
var cors_1 = __importDefault(require("cors"));
var environment_1 = require("./global/environment");
var body_parser_1 = __importDefault(require("body-parser"));
var server = new server_1.default;
server.app.enable('truxy proxy');
// Body Parser 
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// CORS
server.app.use(cors_1.default({ origin: true, credentials: true }));
// Importar rutas 
var usuario_1 = __importDefault(require("./Rutas/usuario"));
// Rutas de servicio 
server.app.use('/usuario', usuario_1.default);
// Conexion a base de datos 
// Arranque del sevidor 
server.start(function () {
    console.log("servidor corriendo: " + environment_1.SERVER_PORT);
});
