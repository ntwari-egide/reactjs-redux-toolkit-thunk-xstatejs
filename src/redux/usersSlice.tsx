import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {username: 'ntwari', age: 21},
    {username: 'kagabo', age: 43},
    {username: 'mugisha', age: 34}
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    // inside here you try to add new redux components
    reducers: {
        userAdded(state, action) {
            state.push(action.payload)
        }
    }
})

// making action available
export const {userAdded} = usersSlice.actions

export default usersSlice.reducer