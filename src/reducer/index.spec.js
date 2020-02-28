import reducer from './index'

describe('Change Filter functions', () => {
    it('Set Filter?', () => {
        const action = {
            type: 'CHANGEFILTER',
            text: 'action'
        }
        expect(reducer({}, action)).toEqual({
            filter: action.text
        })
    })
    it('empty state?', () => {
        const action = {
            type: 'CHANGEFILTER',
            text: 'action'
        }
        expect(reducer(null, action)).toEqual({
            filter: action.text
        })
    })
})

describe('Update Watched List functions', () => {
    it('add watch?', () => {
        const action = {
            type: 'UPDATEWATCHED',
            text: 'videoID'
        }
        expect(reducer({}, action)).toEqual({
            watched: [action.text]
        })
    })
    it('add undefined state to watch?', () => {
        const action = {
            type: 'UPDATEWATCHED'
        }
        expect(reducer(undefined, action)).toEqual({
            watched: [action.text]
        })
    })
    it('add repeated watch?', () => {
        const action = {
            type: 'UPDATEWATCHED',
            text: 'videoID'
        }
        expect(reducer({watched: ['videoID']}, action)).toEqual({
            watched: [action.text]
        })
    })
    it('empty state?', () => {
        const action = {
            type: 'UPDATEWATCHED',
            text: 'videoID'
        }
        expect(reducer(null, action)).toEqual({
            watched: [action.text]
        })
    })
    it('append to list', () => {
        const state = {
            watched: ['videoID1']
        }
        const action = {
            type: 'UPDATEWATCHED',
            text: 'videoID2'
        }
        expect(reducer(state, action)).toEqual({
            watched: [state.watched[0], action.text]
        })
    })
})
