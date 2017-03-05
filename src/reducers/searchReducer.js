import initialState from './initialState';

const searchReducer = (state = initialState.searchTerm, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state, searchTerm: action.value
            }
        default: 
            return state
    }
}

export default searchReducer;   