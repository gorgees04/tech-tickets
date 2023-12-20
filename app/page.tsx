import Crad from "./ui/home/card/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold m-3">Tickets</h1>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center">
        {/* {tickets.map((ticket: TicketCard) => {
          return (
            <div key={ticket.id}>
              <Crad ticket={ticket} />
            </div>
          );
        })} */}
      </div>
    </main>
  );
}
