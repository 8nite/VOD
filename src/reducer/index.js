export default function (state = {}, action) {
    switch (action.type) {
        case 'CHANGEFILTER':
            return {
                ...state,
                filter: action.text
            }
        case 'UPDATEWATCHED': {
            let temp
            if (state)
                temp = (state.watched || [])
            else
                temp = []
            if (!(temp.includes(action.text)))
                temp.push(action.text)
            return {
                ...state,
                watched: temp,
            }
        };
        default:
            return state;
    }
}