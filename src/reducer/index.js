export default function (state = {}, action) {
    switch (action.type) {
        //for categorizing the videos
        case 'CHANGEFILTER':
            return {
                ...state,
                filter: action.text
            }
        //for saving what the user has watched
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