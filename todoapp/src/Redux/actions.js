import * as types from './actionTpes';
import axios from 'axios';


const getUser = (users) => {
    return {
        type :types.GET_USERS,
        payload: users
    }
}


export const loadUsers = ( ) => {
    return function (dispatch) {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((data)=>{
             let users = data.data;
             dispatch(users);
        }).catch((err)=>console.log(err));
    }
}