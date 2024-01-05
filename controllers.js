const notificationController = require('./controllers/notificationController')
const matrixController = require('./controllers/matrixController')

const controllers = (repositories) => {
    return {
        notificationController: notificationController.bind(null, repositories),
        matrixController: matrixController.bind(null, repositories)
    }
}

module.exports = controllers