import EditForm from "../ui/editTicket/EditForm";

const EditTicket = ({ searchParams }: { searchParams: { id: string } }) => {
  return (
    <div className="w-full min-h-screen flex flex-col p-5 ">
      <div>
        <h1 className="text-3xl font-extrabold text-center m-5">Edit Ticket</h1>
      </div>
      <EditForm id={searchParams.id} />
    </div>
  );
};

export default EditTicket;
