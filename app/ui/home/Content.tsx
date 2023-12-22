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

  // ticket Status: if the status is solved filter the tickets with inlt the non solved tickets
  const handleTicketStatus = (id: string) => {
    const solvedTicket = tickets.filter(
      (ticket: TicketCard) => ticket._id !== id
    );
    setTickets(solvedTicket);
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

  // get categories
  const categories = tickets.map((ticket: TicketCard) => ticket.category);
  const filteredCategories = categories.filter(
    (category: string, i: number) => categories.indexOf(category) === i
  );

  return (
    <div className="sm:m-2">
      {filteredCategories.map((category: string, id: number) => {
        return (
          <div key={id} className="w-full flex flex-col my-5">
            <div className="text-2xl border-b-2 border-pageGreen pb-4 ">
              <h1>{category}</h1>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start">
              {tickets.map((ticket: TicketCard) => {
                if (category === ticket.category) {
                  return (
                    <div key={ticket._id} className="my-5 m-2">
                      <Crad
                        ticket={ticket}
                        handleDelete={handleDelete}
                        handleStatusChanges={handleTicketStatus}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
