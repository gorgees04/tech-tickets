import React from "react";
import Priority from "./Priority";
import DeleteBtn from "./DeleteBtn";
import ProgressBar from "./ProgressBar";
import EditBtn from "./EditBtn";
import { TicketCard } from "@/app/libs/definitions";
// import { TicketCard } from "@/app/lib/definitions";

const Crad = ({ ticket }: { ticket: TicketCard }) => {
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
    <div className="w-[400px] border-2 p-5 rounded bg-gray-200 m-5 shadow-lg shadow-gray-700">
      <div className="flex justify-between">
        <Priority priority={Number(ticket.priority)} />
        <div className="flex items-center">
          <EditBtn />
          <DeleteBtn />
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-2xl font-bold">{ticket.title}</h1>
        <div className=" border-t-2 border-pageGreen"></div>
        <p className="whitespace-pre-wrap">{ticket.description}</p>
      </div>

      <div className="flex-grow"></div>
      <div>
        <p className="text-xs text-gray-600">{getDate(ticket.createdAt)}</p>
        <ProgressBar progress={Number(ticket.progress)} />
      </div>
    </div>
  );
};

export default Crad;
