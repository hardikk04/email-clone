import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from "react-router-dom";
// import { convertTimestamp } from "../libs/convertTimestamp";
import { useDispatch } from "react-redux";
import { setSelectedEmail } from "../redux/slices/sendMailBoxSlice";
// import { convertTimestamp } from "../libs/convertTimestamp";

interface Props {
  data: {
    createdAt: {
      seconds: number;
      nanoseconds: number;
    };
    to: string;
    subject: string;
    message: string;
    id: string;
  };
}

const Mail = ({ data }: Props) => {
  const dispatch = useDispatch();

  return (
    <Link
      onClick={() => {
        dispatch(setSelectedEmail(data));
      }}
      to={`/mail/${data.id}`}
      className="flex justify-between items-center border-b border-gray-300 p-4 hover:bg-gray-100 cursor-pointer"
    >
      <div className="flex gap-6 text-xl items-center">
        <MdOutlineCheckBoxOutlineBlank size={25} className="opacity-40" />
        <IoMdStarOutline size={25} className="opacity-40" />
        <span>{data.to}</span>
      </div>
      <div className="w-[50%]">
        <p className="line-clamp-1 text-xl">{data.message}</p>
      </div>
      <div>
        <span className="font-semibold">
          {/* {convertTimestamp(data?.createdAt)} */}
        </span>
      </div>
    </Link>
  );
};

export default Mail;
