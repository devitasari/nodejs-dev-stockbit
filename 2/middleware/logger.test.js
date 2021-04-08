const logger = require('./logger')

jest.mock('../models')
const Log = require('../models')

describe(`middleware logger testing`, () => {
    test(`logger is a function`, () => {
        expect(typeof logger).toBe('function')
    })
    test(`Log.create called`, () => {
        const data = {end_point: `/test`, parameters: { search: `test`} }
        Log.create(data)
        expect(Log.create).toHaveBeenCalled()
        expect(Log.create).toHaveBeenCalledWith(data)
    })
})