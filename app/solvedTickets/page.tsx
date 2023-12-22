import SolvedTicketsContents from "../ui/solvedTickets/SolvedTicketsContents";

const SolvedTickets = () => {
  return (
    <main className="flex min-h-screen flex-col m-2">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold m-3">Solved Tickets</h1>
      </div>
      <SolvedTicketsContents />
    </main>
  );
};

export default SolvedTickets;
