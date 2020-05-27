import Server from './clases/server';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import { SERVER_PORT } from './global/environment';
import bodyParser from 'body-parser';

const server = new Server;

server.app.enable ('truxy proxy');

// Body Parser 
server.app.use( bodyParser.urlencoded( { extended: true }))
server.app.use( bodyParser.json() );

// CORS
server.app.use( cors( { origin: true, credentials: true } ) );

// Importar rutas 
import usuarioRoutes from './Rutas/usuario';

// Rutas de servicio 
server.app.use('/usuario', usuarioRoutes);
// Conexion a base de datos 

// Arranque del sevidor 
server.start (() => {
    console.log(`servidor corriendo: ${SERVER_PORT}`);
});