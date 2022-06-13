const authReducer = (state = {authData : null}, action) => {
    switch (action.type) {
        case 'AUTH':
            
                localStorage.setItem('profile', JSON.stringify({...action?.data}));
            
                return { ...state, authData: action?.data , loading: false, errors: null };
            
        case 'LOGOUT':
                localStorage.clear();
          
                return { ...state, authData: null, loading: false, errors: null };

        case 'FETCH_ALL':
                    return action.payload;
        case 'VERIFY':
                    return state._id === action.payload._id ? action.payload : state;
                    

        default: return state;            
    }
}

export default authReducer;