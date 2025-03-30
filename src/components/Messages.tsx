import { useEffect } from "react";
import Message from "./Message";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../db/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/slices/sendMailBoxSlice";
import { RootState } from "../redux/store/store";

const Mails = () => {
  const getAllEmails = useSelector((store: RootState) => store.mailbox.mails);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubs = onSnapshot(collection(db, "emails"), (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });
    return () => unsubs();
  }, [dispatch]);
  return (
    getAllEmails && (
      <div>
        {getAllEmails.map((email, index: number) => {
          return <Message key={index} data={email}></Message>;
        })}
      </div>
    )
  );
};

export default Mails;
