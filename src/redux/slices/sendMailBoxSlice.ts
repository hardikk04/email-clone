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
  },
});

export const {
  openMailBox,
  closeMailBox,
  setEmails,
  setSelectedEmail,
  setSearchInput,
} = createMailBoxSlice.actions;

export default createMailBoxSlice.reducer;
