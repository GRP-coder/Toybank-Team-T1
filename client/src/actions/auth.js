import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
            // Sign in the user
        const {data} = await api.signIn(formData);

        dispatch({type : 'AUTH', data});
        
        history('/dashboard');
        history(0);
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch)=>{
    try {
            // sign up the user
        const {data} = await api.signUp(formData);

        dispatch({type : 'AUTH', data});
        
        history('/dashboard');
        history(0);
    } catch (error) {
        console.log(error);
    }
}

export const getUser = () => async (dispatch) => {
    try {
      const { data } = await api.getUser();
  
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };


  export const verifyUser = (id, user) => async (dispatch) => {
    try {
      const { data } = await api.verifyUser(id, user);
  
      dispatch({ type: 'VERIFY', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

