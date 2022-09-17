import {createStore} from 'redux'

const userData = (state = {userName: "", email: "", password: "" }, action) => {
    if(action.type == 'click')
        return { userName: "", email: "", password: "" };
    else
        return state;
  }

const adminData = (state = { adminName: "", adminEmail: "", adminPassword: ""}, action) =>{

}
  let userStore = createStore(userData);
  let adminStore = createStore(adminData);
  
  userStore.subscribe(() => console.log(userStore.getState()))
  adminStore.subscribe(() => {})
  userStore.dispatch({ type: 'click' })
  adminStore.dispatch({type: 'click'})