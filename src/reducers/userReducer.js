import initialState from './initialState'

const userReducer = (state = initialState.userInfo, action) => {
    switch(action.type) {
        case 'LOGIN':

        case 'SETUSERTYPE':
            
        default:
            return state
    }
}
export default userReducer;