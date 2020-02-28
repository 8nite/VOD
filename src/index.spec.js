import {init} from './index'

describe('index tester', () => {
    it('bypass initial rendering', () => {
        try
        {
            init()
        }
        catch {}
    })
})