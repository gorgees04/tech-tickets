import React from "react";
import Priority from "./Priority";
import { MdDeleteForever } from "react-icons/md";
import ProgressBar from "./ProgressBar";
import EditBtn from "./EditBtn";
import { TicketCard } from "@/app/libs/definitions";
import StatusBtn from "./StatusBtn";

const Crad = ({
  ticket,
  handleDelete,
  handleStatusChanges,
}: {
  ticket: TicketCard;
  handleDelete: (_id: string) => void;
  handleStatusChanges: (ticketId: string) => void;
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
        <Priority priority={Number(ticket.priority)} />
        <div className="flex items-center">
          <EditBtn id={ticket._id} />
          <button
            className="hover:text-red-700 text-gray-800 text-2xl"
            onClick={() => handleDelete(ticket._id)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-bold">{ticket.title}</h1>
        <div className=" border-t-2 border-pageGreen"></div>
        <p className="whitespace-pre-wrap">{ticket.description}</p>
      </div>

      <div className="flex-grow"></div>
      <div>
        <p className="text-xs text-gray-500">
          <span className="text-gray-600">Created: </span>
          {getDate(ticket.createdAt)}
        </p>
        {ticket.createdAt !== ticket.updatedAt && (
          <p className="text-xs text-gray-500">
            <span className="text-gray-600">Updated: </span>
            {getDate(ticket.updatedAt)}
          </p>
        )}
        <ProgressBar progress={Number(ticket.progress)} />
        <div className="w-full flex justify-end mt-3">
          <StatusBtn
            ticket={ticket}
            handleStatusChanges={handleStatusChanges}
          />
        </div>
      </div>
    </div>
  );
};

export default Crad;
