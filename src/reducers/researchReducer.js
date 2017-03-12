import initialState from './initialState'
import R from 'ramda'

const researchReducer = (state = initialState.research, action) => {

    switch (action.type) {
        case 'POPULATE_RESEARCH':
            return {...state, researchListing: action.researchListing}
        case 'FILTER_BY':
            console.log(action.filterBy);
            break
        case 'SELECT_RESEARCH':
            if (R.contains(action.select.id, state.selectedResearch)) {
                return {...state, selectedResearch: R.filter(x => !(x === action.select.id), state.selectedResearch)}
            }
            else return {...state, selectedResearch: R.append(action.select.id, state.selectedResearch)};
        default:
            return state
    }
}

export default researchReducer