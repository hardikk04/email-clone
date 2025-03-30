import { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "../db/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/slices/sendMailBoxSlice";
import { RootState } from "../redux/store/store";

const Mails = () => {
  const dispatch = useDispatch();
  const getAllEmails = useSelector((store: RootState) => store.mailbox.mails);
  const [tempMails, setTempMails] = useState(getAllEmails);
  const { searchInput } = useSelector((store: RootState) => store.mailbox);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "emails"), (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
          ...data,
          id: doc.id,
          createdAt:
            data.createdAt instanceof Timestamp
              ? data.createdAt.toDate().toISOString() // Convert Firestore Timestamp to ISO format
              : data.createdAt,
        };
      });

      dispatch(setEmails(allEmails));
    });

    return () => unsubscribe(); // Proper cleanup function
  }, [dispatch]);

  useEffect(() => {
    setTempMails(() => {
      return getAllEmails.filter((mail) => {
        return (
          mail.message.includes(searchInput.toLocaleLowerCase()) ||
          mail.to.includes(searchInput.toLocaleLowerCase()) ||
          mail.subject.includes(searchInput.toLocaleLowerCase())
        );
      });
    });
  }, [searchInput, getAllEmails]);

  return (
    tempMails && (
      <div>
        {tempMails.map((email, index: number) => {
          return (
            <Message
              key={index}
              id={email.id}
              createdAt={email.createdAt}
              to={email.to}
              subject={email.subject}
              message={email.message}
            ></Message>
          );
        })}
      </div>
    )
  );
};

export default Mails;
