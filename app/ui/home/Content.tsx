"use client";
import { TicketCard } from "@/app/libs/definitions";
import Crad from "./card/Card";
import { useEffect, useState } from "react";

export default function Content() {
  // tickets
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return (
      <div className="text-3xl text-center mt-[300px]">
        <p>Loading Tickets....</p>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-wrap items-center justify-center">
      {tickets.map((ticket: TicketCard) => {
        return (
          <div key={ticket.id}>
            <Crad ticket={ticket} />
          </div>
        );
      })}
    </div>
  );
}
