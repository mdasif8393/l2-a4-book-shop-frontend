import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin"; // adjust union as needed if more roles exist
  isBlocked: boolean;
  createdAt: string; // or Date if you prefer to convert these
  updatedAt: string; // or Date if you prefer to convert these
  __v: number;
}

type TAuthState = {
  user: null | IUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

// export const useCurrentToken = (state: RootState) => state.auth.token;
// export const useCurrentUser = (state: RootState) => state.auth.user;
