import initialState from './initialState';

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state, searchTerm: action.value
            }
        default: 
            return state
    }
}