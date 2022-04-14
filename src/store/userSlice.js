import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FETCH_URL } from '../config/config';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function (id, { getState }) {
        const page = 1;
        const { data } = await axios.get(FETCH_URL + `&page=${page}`);
        return [data.users, data.total_pages];
    }
);

export const loadMoreUsers = createAsyncThunk(
    'users/loadMoreUsers',
    async function (id, { getState }) {
        const page = getState().users.page;
        const { data } = await axios.get(FETCH_URL + `&page=${page}`);
        return data.users;
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: null,
        error: null,
        page: 1,
        totalPages: 0
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.status = true;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = false;
            state.page = 1;
            state.users = action.payload[0];
            state.totalPages = action.payload[1];
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = false;
        },
        [loadMoreUsers.pending]: (state, action) => {
            state.status = true;
            if (state.totalPages < state.page + 1) return;
            state.page++;
        },
        [loadMoreUsers.fulfilled]: (state, action) => {
            state.status = false;
            state.users = [...state.users, ...action.payload];
        }
    }
});

export default userSlice.reducer;