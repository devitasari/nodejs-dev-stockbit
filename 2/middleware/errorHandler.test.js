const errorHandler = require('./errorHandler')
const httpMocks = require('node-mocks-http')

let req, res, next

beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = jest.fn()
})

describe(`middleware errorHandler testing`, () => {
    test(`errorHandler is a function`, () => {
        expect(typeof errorHandler).toBe('function')
    })
})