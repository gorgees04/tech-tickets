import Link from "next/link";
import { GrAddCircle } from "react-icons/gr";
import { TbHomeBolt } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="bg-pageGreen text-white w-full h-[50px] flex justify-between items-center px-2 sm:px-7">
      <div className="flex justify-around w-[100px]">
        <Link href={"/"} className="text-3xl hover:text-gray-600">
          <TbHomeBolt />
        </Link>
        <Link href={"/addTicket"} className="text-3xl hover:text-gray-600">
          <GrAddCircle />
        </Link>
      </div>

      <div>
        <p className="font-bold">User</p>
      </div>
    </nav>
  );
};

export default Navbar;
