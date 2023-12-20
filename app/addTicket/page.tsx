import AddForm from "../ui/addTicket/AddForm";

const addTicket = () => {
  return (
    <div className="w-full min-h-screen flex flex-col p-5 ">
      <div>
        <h1 className="text-3xl font-extrabold text-center m-5">
          Add New Ticket
        </h1>
      </div>
      <AddForm />
    </div>
  );
};

export default addTicket;
