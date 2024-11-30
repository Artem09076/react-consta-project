import {createSlice} from "@reduxjs/toolkit";

type UserState = {
    username: string ;
    password: string;
    isAuthenticated: boolean;
    accessToken: string;
    refreshToken: string;
    id: number | null;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
}

const initialState: UserState = {
    username: '',
    password:  '',
    isAuthenticated: false,
    accessToken: '',
    refreshToken: '',
    id: null,
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: ''
}

const UserSplice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.accessToken = action.payload.accessToken;
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.gender = action.payload.gender;
            state.image = action.payload.image;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = true;
        }
    }
})


export const {login} = UserSplice.actions;
export default UserSplice.reducer;