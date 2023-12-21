import Content from "@/app/ui/home/Content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col m-2">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold m-3">Tickets</h1>
      </div>
      <Content />
    </main>
  );
}
