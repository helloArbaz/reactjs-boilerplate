import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
    name: string
    email: string
}

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        addUser: (state: any, action: PayloadAction<any>) => {
            console.log(action,'action')
            return state = action.payload
        }
    }

})



export default userSlice.reducer;
export const { addUser } = userSlice.actions