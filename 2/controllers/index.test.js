const httpMocks = require('node-mocks-http')
const LogController = require('./index')

let req, res, next

beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = jest.fn()
})

describe(`controller testing`, () => {
    describe(`static search`, () => {
        test(`controller has search method`, () => {
            expect(typeof LogController.search).toBe('function')
        })
        test(`if success fetch omdbapi search`, () => {            
            expect(res.statusCode).toBe(200)
            expect(typeof res.json()).toBe('object')
        })
    })
    describe(`static detail`, () => {
        test(`controller has detail method`, () => {
            expect(typeof LogController.detail).toBe('function')
        })
        test(`if success fetch omdbapi detail`, () => {            
            expect(res.statusCode).toBe(200)
            expect(typeof res.json()).toBe('object')
        })
    })
})