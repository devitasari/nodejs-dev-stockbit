const Log = require('../models')

const logger = (req, res, next) => {

    const data = {end_point: req.originalUrl.split('?')[0], parameters: req.query }

    return Log.create(data)
    .then(_=> {
        next()
    })
    .catch(err => {
        next(err)
    })
}

module.exports = logger