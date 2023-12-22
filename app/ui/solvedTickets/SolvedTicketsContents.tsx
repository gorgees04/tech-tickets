"use client";

import { SolvedTickets } from "@/app/libs/definitions";
import { useEffect, useState } from "react";
import SolvedCard from "./SolvedCard";

const SolvedTicketsContents = () => {
  const [solvedTickets, setSolvetTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch all the solved tickets
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

  // handle Delete
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/solvedTickets/${id}`, {
        method: "DELETE",
      });

      // to show the resultes without refreshing
      if (res.ok) {
        setLoading(true);
        const deletedFilter = solvedTickets.filter(
          (ticket: SolvedTickets) => ticket._id !== id
        );
        setSolvetTickets(deletedFilter);
        setLoading(false);
      }
    } catch (error) {
      throw new Error("Couldn't delete the solved ticket");
    }
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
  if (solvedTickets.length === 0 && !loading) {
    return (
      <div className="text-3xl text-center mt-[300px]">
        <p>There is no Solved Tickets :) </p>
      </div>
    );
  }

  // get categories
  const categories = solvedTickets.map(
    (ticket: SolvedTickets) => ticket.category
  );
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
              {solvedTickets.map((ticket: SolvedTickets) => {
                if (category === ticket.category) {
                  return (
                    <div key={ticket._id} className="my-5 m-2">
                      <SolvedCard
                        solvedTicket={ticket}
                        handleDelete={handleDelete}
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
};

export default SolvedTicketsContents;
