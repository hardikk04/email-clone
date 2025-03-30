import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput, setUser } from "../../redux/slices/sendMailBoxSlice";
import { RootState } from "../../redux/store/store";
// import Avatar from "react-avatar";

const Navbar = () => {
  const { user } = useSelector((store: RootState) => store.mailbox);

  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchInput(input));
  }, [input, dispatch]);

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
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search mail"
          className="outline-none"
        />
      </div>
      <div className="flex gap-4 items-center">
        <GoQuestion size={30} />
        <IoSettingsOutline size={30} />
        <TbGridDots size={30} />
        <div className="relative avtar h-[5vh] w-[5vh] rounded-full">
          <img
            src={user.photoURL}
            alt="user-profile"
            className="h-full w-full object-cover rounded-full"
          />
          <div className="absolute bottom-[-100%] left-[-50%] bg-[#E9EEF6] rounded-md overflow-hidden">
            <button
              onClick={() => {
                dispatch(setUser({}));
              }}
              className="bg-red-500 text-white px-4 py-2"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
