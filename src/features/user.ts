import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

import { User } from 'domains/github/models/user'
import { getMembers } from 'domains/github/services/get-members'

export type UserState = {
  users: User[]
  isLoading: boolean
  error?: Error | null
}

const typePrefix = 'user'
const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
}

export const getUsers = createAsyncThunk<User[], string>(
  typePrefix + '/getUsersStarted',
  async (orgCode, thunkAPI) => {
    try {
      const users = await getMembers(orgCode)
      return users
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const userSlice = createSlice({
  name: typePrefix,
  initialState,
  reducers: {
    getUsersInit: (state) => {
      state.isLoading = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.users = action.payload
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as Error
    })
  },
})
