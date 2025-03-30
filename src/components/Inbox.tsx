import { Outlet } from "react-router-dom";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { TbDotsVertical } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiInboxFill } from "react-icons/ri";
import { GoTag } from "react-icons/go";
import { MdOutlineGroups2 } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useState } from "react";
import Messages from "./Messages";

const Inbox = () => {
  const [isMailSelected, setIsMailSelected] = useState(0);
  const inboxFilters = [
    {
      icon: <RiInboxFill size={20} />,
      title: "Primary",
    },
    {
      icon: <GoTag size={20} />,
      title: "Promotion",
    },
    {
      icon: <MdOutlineGroups2 size={20} />,
      title: "Social",
    },
    {
      icon: <IoIosInformationCircleOutline size={20} />,
      title: "Udates",
    },
  ];
  return (
    <div className="flex h-screen w-full">
      <Outlet></Outlet>
      <div className="w-full h-full bg-white rounded-3xl overflow-x-hidden">
        <div className="w-full flex justify-between p-4">
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <MdOutlineCheckBoxOutlineBlank size={25} />
              <MdOutlineArrowDropDown size={25} />
            </div>
            <VscDebugRestart size={25} />
            <TbDotsVertical size={25} />
          </div>
          <div className="flex items-center gap-8">
            <span className="text-gray-500">1-50 of 1,498</span>
            <div className="flex gap-4">
              <IoIosArrowBack size={20} />
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </div>
        <div className="flex">
          {inboxFilters.map((inbox, index) => {
            return (
              <div
                onClick={() => {
                  setIsMailSelected(index);
                }}
                key={index}
                className={`${
                  isMailSelected === index
                    ? "border-b-blue-500 border-b-4 text-blue-500"
                    : "border-none text-black"
                } flex cursor-pointer items-center hover:bg-gray-100 px-4 py-4 gap-5 text-2xl w-[16%]`}
              >
                {inbox.icon}
                <span>{inbox.title}</span>
              </div>
            );
          })}
        </div>
        <Messages></Messages>
      </div>
    </div>
  );
};

export default Inbox;
