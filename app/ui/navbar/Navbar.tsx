import Link from "next/link";
import { GrAddCircle } from "react-icons/gr";
import { TbHomeBolt } from "react-icons/tb";
import { MdFileDownloadDone } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-pageGreen text-white w-full h-[50px] flex justify-between items-center px-2 sm:px-7 sticky top-0">
      <div className="flex justify-around w-[100px]">
        <Link href={"/"} className="text-3xl hover:text-gray-600 ml-5">
          <TbHomeBolt />
        </Link>
        <Link href={"/addTicket"} className="text-3xl hover:text-gray-600 ml-5">
          <GrAddCircle />
        </Link>
        <Link
          href={"/solvedTickets"}
          className="text-3xl hover:text-gray-600 ml-5"
        >
          <MdFileDownloadDone />
        </Link>
      </div>

      <div>
        <p className="font-bold">User</p>
      </div>
    </nav>
  );
};

export default Navbar;
