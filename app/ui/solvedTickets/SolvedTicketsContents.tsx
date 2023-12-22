"use client";

import { useEffect, useState } from "react";

const SolvedTicketsContents = () => {
  const [solvedTickets, setSolvetTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch("/api/solvedTickets", {
        method: "GET",
      });
      const data = await res.json();
      setSolvetTickets(data);
      setLoading(false);
    };
    getData();
  }, []);

  // loading
  if (loading) {
    return (
      <div className="text-3xl text-center mt-[300px]">
        <p>Loading Tickets....</p>
      </div>
    );
  }

  // get categories
  const categories = solvedTickets.map((ticket: TicketCard) => ticket.category);
  const filteredCategories = categories.filter(
    (category: string, i: number) => categories.indexOf(category) === i
  );

  return (
    <div className="sm:m-10">
      {filteredCategories.map((category: string, id: number) => {
        return (
          <div key={id} className="w-full flex flex-col my-5">
            <div className="text-2xl border-b-2 border-pageGreen pb-4 ">
              <h1>{category}</h1>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start items-center">
              {solvedTickets.map((ticket: TicketCard) => {
                if (category === ticket.category) {
                  return (
                    <div key={ticket._id} className="my-5 m-2">
                      {/* <Crad
                        ticket={ticket}
                        handleDelete={handleDelete}
                        handleStatusChanges={handleTicketStatus}
                      /> */}
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
};

export default SolvedTicketsContents;
