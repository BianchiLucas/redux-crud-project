import { createSlice } from "@reduxjs/toolkit"
import { FakeData } from "../FakeData"

export const userSlice = createSlice({
    name: "users",
    initialState: {value: FakeData},
    reducers: {
        addUser: (state, action) => {
           state.value.push(action.payload);
        },

        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },

        updateUsername: (state, action) => {
            state.value.forEach((user) => {
                if (user.id === action.payload.id) {
                    user.userName = action.payload.userName
                }
            })
        }
    },
})

export const { addUser, deleteUser, updateUsername } = userSlice.actions
export default userSlice.reducer