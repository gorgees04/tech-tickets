"use client";
import { TicketCard } from "@/app/libs/definitions";
import Crad from "./card/Card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Content() {
  const route = useRouter();
  // get all tickets
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/tickets");
      const data = await res.json();
      setTickets(data);
      setLoading(false);
    };
    getData();
  }, []);

  // handle Delete
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/tickets/${id}`, {
        method: "DELETE",
      });

      // to show the resultes without refreshing

      // refresh the page
      if (res.ok) {
        const deletedFilter = tickets.filter(
          (ticket: TicketCard) => ticket._id !== id
        );
        setTickets(deletedFilter);
        route.refresh();
      }
    } catch (error) {
      throw new Error("Couldn't delete the ticket");
    }

    route.refresh();
  };

  // loading
  if (loading) {
    return (
      <div className="text-3xl text-center mt-[300px]">
        <p>Loading Tickets....</p>
      </div>
    );
  }

  // if there is no tickets
  if (tickets.length === 0) {
    return (
      <div className="text-3xl text-center mt-[300px]">
        <p>There is no Tickets :) </p>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-wrap items-center justify-center">
      {tickets.map((ticket: TicketCard) => {
        return (
          <div key={ticket._id}>
            <Crad ticket={ticket} handleDelete={handleDelete} />
          </div>
        );
      })}
    </div>
  );
}
