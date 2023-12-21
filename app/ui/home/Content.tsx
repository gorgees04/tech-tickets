"use client";
import { TicketCard } from "@/app/libs/definitions";
import Crad from "./card/Card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Content() {
  const route = useRouter();
  // get all tickets
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch("/api/tickets", {
        method: "GET",
      });
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
        setLoading(true);
        const deletedFilter = tickets.filter(
          (ticket: TicketCard) => ticket._id !== id
        );
        setTickets(deletedFilter);
        setLoading(false);
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
  if (tickets.length === 0 && !loading) {
    return (
      <div className="text-3xl text-center mt-[300px]">
        <p>There is no Tickets :) </p>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-wrap justify-center">
      {tickets.map((ticket: TicketCard) => {
        return (
          <div key={ticket._id} className="m-5">
            <Crad ticket={ticket} handleDelete={handleDelete} />
          </div>
        );
      })}
    </div>
  );
}
