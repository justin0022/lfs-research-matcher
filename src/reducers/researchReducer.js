import initialState from './initialState'

const researchReducer = (state = initialState.researchListing, action) => {

    switch (action.type) {
        case 'POPULATE_RESEARCH':
            return {...state, researchListing: action.researchListing}
        case 'FILTER_BY':
            let term = action.term
            console.log(term)

        default:
            return state
    }
}

export default researchReducer