const Log = require('./index')

describe(`Log model testing`, () => {
    test(`static create is method`, () => {
        expect(typeof Log.create).toBe('function')
    })
    test(`static is a promise`, (done) => {
        let input = { 
            end_point: `tes`,
            parameters: `/test`
        }
        return Log.create(input).then(data => {
            expect(typeof data).toBe('object')
            expect(data.affectedRows).toBe(1)
            done()
        })
    })
})