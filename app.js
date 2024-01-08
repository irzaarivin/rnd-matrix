(async () => {
    // DECLARE EXPRESSJS
    const express = require('express')
    const session = require('express-session')
    const app = express()
    const http = require('http')
    const server = http.createServer(app)
    const cors = require('cors')

    app.use(session({ secret: 'gacor-kang-mantap-djiwa', resave: true, saveUninitialized: true }))
    app.use(cors({
        origin: 'http://localhost:3000'
    }))

    // DECLARE SOCKET.IO & CONFIGURATION
    const socketIo = require('socket.io')
    const io = socketIo(server)

    // DECLARE MATRIX & CLIENT
    const matrix = require('./matrix')

    // DATABASE CONFIG
    const { database, testConnection } = require('./database')

    // REPOSITORIES
    const repos = require('./repositories.js')
    const repositories = repos(database)

    // CONTROLLERS
    const { matrixController } = require('./controllers.js')(repositories)
    const controllers = {
        matrixController: matrixController({matrix})
    }

    // ROUTING DISINI
    const routes = require('./routes');
    await routes(app, controllers);

    // RUNNING SERVER
    server.listen(4444, () => {
        console.log('Server is running on port 3000')
    })
})()