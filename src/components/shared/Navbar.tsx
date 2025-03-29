import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
// import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full relative px-6 py-4">
      <div className="nav-left flex items-center gap-6">
        <IoMdMenu size={30} />
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
            alt="email-logo"
            className="h-8"
          />
          <span className="text-2xl">Gmail</span>
        </div>
      </div>
      <div className="nav-center bg-[#E9EEF6] rounded-full flex text-2xl gap-4 w-3xl px-3 py-3">
        <IoIosSearch size={30} />
        <input type="text" placeholder="Search mail" className="outline-none" />
      </div>
      <div className="flex gap-4 items-center">
        <GoQuestion size={30} />
        <IoSettingsOutline size={30} />
        <TbGridDots size={30} />
        <div className="avtar h-[5vh] w-[5vh] rounded-full overflow-hidden">
          <img
            src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
            alt="user-profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
