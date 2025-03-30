import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { closeMailBox } from "../redux/slices/sendMailBoxSlice";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../db/firebase";
import { toast } from "react-toastify";
const SendMail = () => {
  const open = useSelector((store: RootState) => store.mailbox.open);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(),
    });
    toast.success("Created!");

    dispatch(closeMailBox());

    // making empty the inputs
    setFormData({
      to: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      className={`${
        open ? "absolute" : "hidden"
      } right-[5%] bottom-0 w-xl overflow-hidden shadow-2xl bg-white`}
    >
      <div className="flex justify-between items-center bg-[#F2F6FC] p-4">
        <h2 className="text-2xl font-semibold">New Message</h2>
        <RxCross2
          onClick={() => {
            dispatch(closeMailBox());
          }}
          size={25}
          className="cursor-pointer"
        />
      </div>
      <form
        action=""
        className="w-full p-4 flex flex-col gap-4 text-xl items-start"
      >
        <input
          value={formData.to}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, to: e.target.value };
            });
          }}
          type="email"
          className="outline-none border-b w-full border-gray-400 pb-3"
          placeholder="To"
        />
        <input
          value={formData.subject}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, subject: e.target.value };
            });
          }}
          type="text"
          className="outline-none border-b w-full border-gray-400 pb-3"
          placeholder="Subject"
        />
        <textarea
          value={formData.message}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, message: e.target.value };
            });
          }}
          name=""
          id=""
          className="w-full h-[30vh] outline-none"
          placeholder="message"
        ></textarea>
        <button
          onClick={submitHandler}
          className="bg-blue-500 cursor-pointer px-5 py-1 text-white rounded-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
