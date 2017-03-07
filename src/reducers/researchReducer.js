import initialState from './initialState';

const researchReducer = (state = initialState.researchListing, action) => {
    switch (action.type) {
        case 'POPULATE_RESEARCH':
            return {...state, researchListing: action.researchListing}
        default:
            return state
    }
}

export default researchReducer