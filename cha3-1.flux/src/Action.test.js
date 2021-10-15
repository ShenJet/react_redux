const Action = require("./Action")
// @ponicode
describe("Action.increment", () => {
    test("0", () => {
        let callFunction = () => {
            Action.increment(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Action.increment(5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Action.increment(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Action.increment(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Action.increment(3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Action.increment(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Action.decrement", () => {
    test("0", () => {
        let callFunction = () => {
            Action.decrement(5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Action.decrement(3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Action.decrement(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Action.decrement(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Action.decrement(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Action.decrement(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
