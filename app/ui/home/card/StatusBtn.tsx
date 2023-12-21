"use client";

import { ChangeEvent, useState } from "react";

const StatusBtn = ({ id, status }: { id: string; status: string }) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  // status option
  const statusOptions = ["open", "pending", "solved"];

  // object to change color depending on the status
  const statusColor: { [key: string]: string } = {
    open: "bg-blue-500",
    pending: "bg-yellow-400",
    solved: "bg-pageGreen",
  };

  const handleChanges = async (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value);

    try {
      const res = await fetch(`/api/tickets/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: e.target.value }),
      });
    } catch (error: any) {
      throw new Error("Failed to change status of the ticket // ", error);
    }
  };
  return (
    <div>
      <select
        value={currentStatus}
        onChange={handleChanges}
        className={`text-white text-center rounded-md hover:bg-opacity-80 text-sm p-2 capitalize ${
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
