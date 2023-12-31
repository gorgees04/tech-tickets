import React from "react";
import Priority from "../home/card/Priority";
import { SolvedTickets } from "@/app/libs/definitions";
import { MdDeleteForever } from "react-icons/md";
import ProgressBar from "../home/card/ProgressBar";

const SolvedCard = ({
  solvedTicket,
  handleDelete,
}: {
  solvedTicket: SolvedTickets;
  handleDelete: (id: string) => void;
}) => {
  // conver the data comes from database
  const getDate = (date: string) => {
    const newDate = new Date(date);

    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const day = newDate.getDate().toString().padStart(2, "0");

    const hour = newDate.getHours().toString().padStart(2, "0");
    const min = newDate.getMinutes().toString().padStart(2, "0");

    const fullDate = `${year}/${month}/${day} - ${hour}:${min}`;
    return fullDate;
  };

  return (
    <div className="flex flex-col w-[350px] sm:w-[400px] h-full border-2 p-5 rounded bg-gray-200 shadow-lg shadow-gray-700 ">
      <div className="flex justify-between">
        <Priority priority={Number(solvedTicket.priority)} />
        <div className="flex items-center">
          <button
            className="hover:text-red-700 text-gray-800 text-2xl"
            onClick={() => handleDelete(solvedTicket._id)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-bold">{solvedTicket.title}</h1>
        <div className=" border-t-2 border-pageGreen"></div>
        <p className="whitespace-pre-wrap">{solvedTicket.description}</p>
      </div>

      <div className="flex-grow"></div>
      <div>
        <p className="text-xs text-gray-500">
          <span className="text-gray-600">Created: </span>
          {getDate(solvedTicket.createdTime)}
        </p>
        {solvedTicket.editedTime !== solvedTicket.createdTime && (
          <p className="text-xs text-gray-500">
            <span className="text-gray-600">Updated: </span>
            {getDate(solvedTicket.editedTime)}
          </p>
        )}
        <p className="text-xs text-gray-500">
          <span className="text-gray-600">Solved: </span>
          {getDate(solvedTicket.createdAt)}
        </p>
        <ProgressBar progress={Number(solvedTicket.progress)} />
        <div className="w-full flex justify-end mt-3">
          <button className="bg-pageGreen text-white px-4 py-2 rounded-md transition duration-300">
            {solvedTicket.status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolvedCard;
