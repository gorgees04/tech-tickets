import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";

const EditBtn = ({ id }: { id: string }) => {
  // using searchParams to create a new params of id
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleEdit = () => {
    const params = new URLSearchParams(searchParams);
    if (id) {
      params.set("id", id);
    } else {
      params.delete("id");
    }

    // after creating the id params, it will direct to edit page within the id of the ticket
    router.push(`/editTicket?${params.toString()}`);
  };
  return (
    <button
      className="hover:text-pageGreen text-gray-800 text-xl font-bold"
      onClick={handleEdit}
    >
      <FaRegEdit />
    </button>
  );
};

export default EditBtn;
