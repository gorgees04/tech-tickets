import { TicketCard } from "@/app/libs/definitions";
import Crad from "./card/Card";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Couldn't fetch the data");
    }

    return res.json();
  } catch (error) {
    throw `Failed to fetch the data from the api // ${error}`;
  }
};

export default async function Content() {
  const tickets = await getData();

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
