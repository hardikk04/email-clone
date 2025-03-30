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
        createdAt: {
          seconds: 0,
          nanoseconds: 0,
        },
      },
    ],
    selectedEmail: {
      to: "",
      subject: "",
      message: "",
      id: "",
      createdAt: {
        seconds: 0,
        nanoseconds: 0,
      },
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
  },
});

export const { openMailBox, closeMailBox, setEmails, setSelectedEmail } =
  createMailBoxSlice.actions;

export default createMailBoxSlice.reducer;
