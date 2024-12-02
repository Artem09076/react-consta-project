import {createSlice} from "@reduxjs/toolkit";

type UserState = {
    isAuthenticated: boolean;
    accessToken: string;
    id: number | null;
}

const initialState: UserState = {
    isAuthenticated: false,
    accessToken: '',
    id: null,
}

const UserSplice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.id = action.payload.id;
            state.isAuthenticated = true;
        },
        logout: (state, action) => {
            state.accessToken = action.payload.accessToken ;
            state.id = action.payload.id;
            state.isAuthenticated = false;
        }
    }
})


export const {login, logout} = UserSplice.actions;
export default UserSplice.reducer;