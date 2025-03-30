import { GoPencil } from "react-icons/go";
import { RiInboxFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { LuClock7 } from "react-icons/lu";
import { IoSendOutline } from "react-icons/io5";
import { RiDraftLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { openMailBox } from "../redux/slices/sendMailBoxSlice";

const Sidebar = () => {
  const sideBarOptions = [
    {
      icon: <RiInboxFill size={30} />,
      text: "Inbox",
      number: 90,
      isActive: true,
    },
    {
      icon: <FaRegStar size={30} />,
      text: "Starred",
      number: 90,
      isActive: false,
    },
    {
      icon: <LuClock7 size={30} />,
      text: "Snoozed",
      number: 90,
      isActive: false,
    },
    {
      icon: <IoSendOutline size={30} />,
      text: "Sent",
      number: 90,
      isActive: false,
    },
    {
      icon: <RiDraftLine size={30} />,
      text: "Drafts",
      number: 90,
      isActive: false,
    },
    {
      icon: <IoIosArrowDown size={30} />,
      text: "More",
      number: 90,
      isActive: false,
    },
  ];

  const dispatch = useDispatch();

  return (
    <div className="w-[24%] h-full relative pr-10">
      <div className="px-3 pb-6">
        <button
          onClick={() => {
            dispatch(openMailBox());
          }}
          className="flex cursor-pointer items-center px-6 py-4 gap-4 bg-[#C2E7FF] rounded-2xl text-xl"
        >
          <GoPencil size={30} />
          Compose
        </button>
      </div>
      <div>
        {sideBarOptions.map((option, index) => {
          return (
            <div
              key={index}
              className={`${
                option.isActive && "bg-[#D3E3FD]"
              } flex justify-between items-center px-6 pl-10 rounded-r-full py-2 hover:bg-[#EBEDF0] cursor-pointer`}
              onClick={() => {}}
            >
              <div className="flex gap-6 items-center">
                {option.icon}
                <span className="text-xl font-semibold">{option.text}</span>
              </div>
              <span className="font-semibold">{option.number}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
