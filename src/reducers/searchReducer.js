import initialState from './initialState';

const searchReducer = (state = initialState.search, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH':
            return {...state, searchTerm: action.value}
        case 'FIRE_SEARCH':
            return {...state, fireSearch: action.fireSearch}
        default: 
            return state
    }
}

export default searchReducer;   