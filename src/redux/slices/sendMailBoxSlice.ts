import { createSlice } from "@reduxjs/toolkit";

export const createMailBoxSlice = createSlice({
  name: "mailbox",
  initialState: {
    open: false,
    mails: [
      {
        to: "",
        subject: "",
        message: "",
        id: "",
        createdAt: "",
      },
    ],
    selectedEmail: {
      to: "",
      subject: "",
      message: "",
      id: "",
      createdAt: "",
    },
    searchInput: "",
    user: {
      displayName: "",
      email: "",
      photoURL: "",
    },
  },
  reducers: {
    openMailBox: (state) => {
      state.open = true;
    },
    closeMailBox: (state) => {
      state.open = false;
    },
    setEmails: (state, action) => {
      state.mails = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  openMailBox,
  closeMailBox,
  setEmails,
  setSelectedEmail,
  setSearchInput,
  setUser,
} = createMailBoxSlice.actions;

export default createMailBoxSlice.reducer;
