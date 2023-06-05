import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users:[
        {id:1,name:"Dekin Faisal",email:"dekin@gmail.com",gen:10},
        {id:2,name:"Alex Nola",email:"alex@gmail.com",gen:4},
    ],
    modal:true
}

export const userSlice = createSlice({
    name:'users',
    initialState,

    reducers : {
        addUser:(state,action)=>{
            state.users.push(action.payload)
        },

        deleteUser:(state,action)=>{
            const deleted = state.users.filter((user,index)=> index != action.payload)
            state.users = deleted
            
        },

        editUser : (state, action )=>{
            // console.log(action.payload)
            state.users= state.users.map((user) => user.id === action.payload.id ? action.payload.editData : user)
        },

        closeModal:(state)=>{
            state.modal = false
        }
        

        
    }
})

export const {addUser,deleteUser,editUser,closeModal} = userSlice.actions

export default userSlice.reducer