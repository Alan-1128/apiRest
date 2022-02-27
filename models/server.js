const express = require('express')
const cors = require('cors')

const app = express()

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT

        // Middlewares
        this.middlewares();

        // rutas 
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo de body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        
        this.app.use('/api', require('../routes/userRoutes'))
    }



    listen() {
        this.app.listen( this.port, () => {
            console.log('corriendo...')
        } )
    }
}




module.exports = Server