import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://task-manager-api.goit.global/';


const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post("/users/signup", credentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

/*
 * POST @ /users/login
 * body: { email, password }
*/

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post("/users/login", credentials);
            setAuthHeader((await res).data.token);
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
    }
}
);

/* 
 * POST @ users/logout
 * headers: Authorization: Bearer token
 * no body
 */

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("users/logout");
            clearAuthHeader();
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);

/*
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */

export const refresh = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();;
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Unable to fetch user");
        }

        try {
            setAuthHeader(persistedToken);
            const res = await axios.get("users/me");
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);