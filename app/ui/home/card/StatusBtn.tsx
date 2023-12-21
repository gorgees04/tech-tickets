"use client";

import { ChangeEvent, useState } from "react";

const StatusBtn = () => {
  const [currentStatus, setCurrentStatus] = useState("open");

  // status option
  const statusOptions = ["open", "pending", "solved"];

  // object to change color depending on the status
  const statusColor: { [key: string]: string } = {
    open: "bg-blue-500",
    pending: "bg-yellow-400",
    solved: "bg-pageGreen",
  };

  const handleChanges = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value);
  };
  return (
    <div>
      <select
        value={currentStatus}
        onChange={handleChanges}
        className={`text-white text-center rounded-md hover:bg-opacity-80 text-sm p-2  ${
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
