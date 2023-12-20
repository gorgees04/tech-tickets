import { FaFire } from "react-icons/fa";

const Priority = ({ priority }: { priority: number }) => {
  const arr = new Array(5).fill(null);
  return (
    <div className=" text-gray-400 flex text-xl">
      {arr.map((_fire: any, id: number) => {
        return (
          <div key={id} className={priority > id ? "text-red-700" : ""}>
            <FaFire />
          </div>
        );
      })}
    </div>
  );
};

export default Priority;
