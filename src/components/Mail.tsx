import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiInboxArchiveLine } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineMarkAsUnread } from "react-icons/md";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
// import { convertTimestampExact } from "../libs/convertTimestamp";

const Mail = () => {
  const { selectedEmail } = useSelector((store: RootState) => store.mailbox);
  console.log(selectedEmail);

  return (
    <div className="flex h-screen w-full">
      <Outlet></Outlet>
      <div className="w-full h-full bg-white rounded-3xl overflow-x-hidden p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to={"/"}>
              <IoIosArrowRoundBack
                size={40}
                className="hover:bg-gray-100 rounded-full p-2"
              />
            </Link>
            <RiInboxArchiveLine
              size={40}
              className="hover:bg-gray-100 rounded-full p-2"
            />
            <IoIosInformationCircleOutline
              size={40}
              className="hover:bg-gray-100 rounded-full p-2"
            />
            <MdDeleteOutline
              size={40}
              className="hover:bg-gray-100 rounded-full p-2"
            />
            <MdOutlineMarkAsUnread
              size={40}
              className="hover:bg-gray-100 rounded-full p-2"
            />
            <MdOutlineMoveToInbox
              size={40}
              className="hover:bg-gray-100 rounded-full p-2"
            />
            <BsThreeDotsVertical
              size={40}
              className="hover:bg-gray-100 rounded-full p-2"
            />
          </div>

          <div className="flex gap-4">
            <IoIosArrowBack size={20} />
            <IoIosArrowForward size={20} />
          </div>
        </div>
        <div className="pt-8">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <h2 className="text-2xl font-semibold">
                {selectedEmail.subject}
              </h2>
              <button className="bg-gray-200 px-3 rounded-md">inbox</button>
            </div>
            <span className="text-gray-500">
              {/* {convertTimestampExact(selectedEmail.createdAt)} */}
            </span>
          </div>
          <div className="pt-6">
            <p className="text-gray-500">{selectedEmail.to}</p>
            <p className="text-gray-500">to me</p>
          </div>
          <div className="pt-12">
            <p className="">{selectedEmail.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
