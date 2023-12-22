"use client";

import { TicketCard } from "@/app/libs/definitions";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const StatusBtn = ({
  ticket,
  handleStatusChanges,
}: {
  ticket: TicketCard;
  handleStatusChanges: (changedStatus: string, ticketId: string) => void;
}) => {
  const [currentStatus, setCurrentStatus] = useState(ticket.status);

  // status option
  const statusOptions = ["open", "pending", "solved"];

  // object to change color depending on the status
  const statusColor: { [key: string]: string } = {
    open: "bg-sky-500",
    pending: "bg-amber-400",
    solved: "bg-pageGreen",
  };

  const handleChanges = async (e: ChangeEvent<HTMLSelectElement>) => {
    const changedStatus = e.target.value;
    const ticketId = ticket._id;
    setCurrentStatus(changedStatus);

    // check if the status is solved to update it in database
    if (changedStatus !== "solved") {
      try {
        const res = await fetch(`/api/tickets/${ticket._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: changedStatus }),
        });
      } catch (error: any) {
        throw new Error("Failed to change status of the ticket // ", error);
      }
    }

    if (changedStatus === "solved") {
      // send data to content component to change the data without refresh
      handleStatusChanges(changedStatus, ticketId);
      const solvedTicket = {
        id: ticket._id,
        title: ticket.title,
        description: ticket.description,
        category: ticket.category,
        priority: ticket.priority,
        progress: ticket.priority,
        status: ticket.status,
        createdTime: ticket.createdAt,
        editedTime: ticket.updatedAt,
      };
      console.log(solvedTicket);

      const toSolvedPage = async () => {
        try {
          const res = await fetch("/api/solvedTickets", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(solvedTicket),
          });
          const data = await res.json();
          return data;
        } catch (error) {
          throw new Error("couldn't add solved ticket to solved page");
        }
      };
      toSolvedPage();

      const removeSolvedData = async () => {
        try {
          const res = await fetch(`/api/tickets/${ticket._id}`, {
            method: "DELETE",
          });
        } catch (error) {
          throw new Error("Couldn't remove solved ticket");
        }
      };

      removeSolvedData();
    }
  };

  return (
    <div>
      <select
        value={currentStatus}
        onChange={handleChanges}
        className={`text-white text-center rounded-md hover:bg-opacity-80 text-sm p-2 capitalize hover:cursor-pointer ${
          statusColor[currentStatus] || ""
        }`}
      >
        {statusOptions.map((status: string, id: number) => {
          return (
            <option key={id} value={status}>
              {status}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default StatusBtn;
