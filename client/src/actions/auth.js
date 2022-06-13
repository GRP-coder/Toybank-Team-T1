import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
            // Sign in the user
        const {data} = await api.signIn(formData);

        dispatch({type : 'AUTH', data});

        
        
        if(!(data.result.verified)){
          console.error("Admin Not Verified");
          alert("Admin Not Verified");
          dispatch({type:'LOGOUT'});
          history('/');

        }
        else{
          history('/dashboard/app');
          history(0);
        }
        
        
        
        

    } catch (error) {
        console.log(error);
        alert(error.response.data.message);
        history(0);

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

