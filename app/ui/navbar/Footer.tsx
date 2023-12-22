import Image from "next/image";
import profile from "@/public/profile.jpg";
import { FaGithubAlt } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="h-[240px] bg-stone-950 text-offWhite w-full flex justify-center items-center shadow-lg shadow-black border-t-4 border-pageGreen">
      <div className="m-10 text-center">
        <h1 className="text-2xl">Gorgees Odisho</h1>
        <p className=" text-gray-500">Web Developer</p>
        <div className="flex justify-around items-center my-5 text-xl">
          <a href="https://github.com/gorgees04" target="_blank">
            <FaGithubAlt />
          </a>
          <a href="https://www.linkedin.com/in/gorgees/" target="_blank">
            <FiLinkedin />
          </a>
          <a href="mailto:gorgees041@gmail.com" target="_blank">
            <MdOutlineAlternateEmail />
          </a>
          <a
            href="https://www.google.com/maps/place/Amman,+Jordan"
            target="_blank"
          >
            <FaMapLocationDot />
          </a>
        </div>
      </div>
      <Image
        src={profile}
        alt="profile"
        width={150}
        height={0}
        priority={true}
        className="rounded-full shadow-lg shadow-black border-2 border-pageGreen"
      />
    </div>
  );
};

export default Footer;
