import initialState from './initialState';

const searchReducer = (state = initialState.search, action) => {
    switch (action.type) {
        case 'UPDATESEARCH':
            return {
                ...state, searchTerm: action.value
            }
        case 'FIRESEARCH':
            return {
                ...state, fireSearch: action.fireSearch
            }
        default: 
            return state
    }
}

export default searchReducer;   