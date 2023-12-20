import { TicketCard } from "./libs/definitions";
import Crad from "./ui/home/card/Card";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets");

    if (!res.ok) {
      throw new Error("Couldn't fetch the data");
    }

    return res.json();
  } catch (error) {
    throw `Failed to fetch the data from the api // ${error}`;
  }
};

export default async function Home() {
  const tickets = await getData();

  return (
    <main className="flex min-h-screen flex-col p-10">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold m-3">Tickets</h1>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center">
        {tickets.map((ticket: TicketCard) => {
          return (
            <div key={ticket.id}>
              <Crad ticket={ticket} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
