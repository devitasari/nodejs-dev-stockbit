const axios = require('axios')

class LogController {

    static search(req, res, next) {
        let endPoint = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`

        req.query.title ? endPoint += `&s=${req.query.title}` : next({status: 400, message: `Title is required!`})
        req.query.type ? endPoint += `&type=${req.query.type}` : ''
        req.query.year ? endPoint += `&y=${req.query.year}` : ''
        req.query.returnType ? endPoint += `&r=${req.query.returnType}` : ''
        req.query.page ? endPoint += `&page=${req.query.page}` : ''

        axios.get(endPoint)
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static detail(req, res, next) {
        let endPoint = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`

        req.query.id ? endPoint += `&i=${req.query.id}` : ''
        req.query.title ? endPoint += `&t=${req.query.title}` : ''
        req.query.type ? endPoint += `&type=${req.query.type}` : ''
        req.query.year ? endPoint += `&y=${req.query.year}` : ''
        req.query.plot ? endPoint += `&plot=${req.query.plot}` : ''
        req.query.returnType ? endPoint += `&r=${req.query.returnType}` : ''

        axios.get(endPoint)
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = LogController



