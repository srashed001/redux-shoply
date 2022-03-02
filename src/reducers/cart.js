
function cart (state = {}, action){
    switch (action.type){
        case 'ADD':
            return state[action.id] ? {...state, [action.id]: state[action.id] + 1} : {...state, [action.id]: 1}
        case 'REMOVE':
            return !state[action.id] ? state : {...state, [action.id]: state[action.id] - 1 }
        default: 
            return state
    }

}

export default cart