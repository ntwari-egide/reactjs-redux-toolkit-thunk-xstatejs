import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, username: 'ntwari', age: 21},
    {id: 2, username: 'kagabo', age: 43},
    {id: 3,username: 'mugisha', age: 34}
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    // inside here you try to add new redux components
    reducers: {
        userAdded(state, action) {
            console.log('reached ...');
            
            state.push(action.payload)
        },
        editUser( state, action ) {
            let index = state.findIndex( user => user.id === action.payload.id )
            state[index].username = action.payload.username
            state[index].age = action.payload.age
            return state
        },
        removeUser(state, action ){
            let index = state.findIndex(user => user.id === action.payload.id)
            state.splice(index,1)
            return state
        }
    }
})

// making action available
export const {userAdded, editUser, removeUser} = usersSlice.actions

export default usersSlice.reducer