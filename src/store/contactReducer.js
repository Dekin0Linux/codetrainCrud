import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:[
    {id:1,name:"Alex Nola",email:"alex@gmail.com",contact:'123456789'},     
    {id:2,name:"John Doe",email:"john@gmail.com",contact:25},]
};


export const contactSlice=createSlice({
    name:'contact',
    initialState,

    reducers:{
        addContact(state,action){
            state.user.push(action.payload)
        },

        deleteUser:(state,action)=>{
            const deleted = state.user.filter((user,index)=> index != action.payload)
            state.user = deleted
        },

        editUser : (state,action)=>{
            state.user = state.user.map((user,index) => user.id === action.payload.id ? action.payload.data : user)
        }


    }
})

export const {addContact,deleteUser,editUser}=contactSlice.actions

export default contactSlice.reducer