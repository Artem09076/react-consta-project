import {createSlice} from "@reduxjs/toolkit";

type UserState = {
    email: string | null;
    password: string | null;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    email: null,
    password: null,
    isAuthenticated: false,
}

const UserSplice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isAuthenticated = true;
        }
    }
})


export const {login} = UserSplice.actions;
export default UserSplice.reducer;