"use client";
import { TicketData } from "@/app/libs/definitions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const EditForm = ({ id }: { id: string }) => {
  const router = useRouter();

  const ticketData = {
    title: "",
    description: "",
    category: "",
    priority: "1",
    progress: 0,
  };

  // form details
  const [formData, setFormData] = useState(ticketData);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/tickets/${id}`, {
        method: "GET",
      });
      const data = await res.json();
      setFormData(data);
    };
    getData();
  }, [id]);

  // handle changes of all inputs
  // e definitions type has to be imported from react
  const handleChanges = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value.toString() });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    // send post req
    try {
      const res = await fetch(`/api/tickets/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // after handle all request and submit the form will refresh and redirect to home page
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create ticket");
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      throw `Failed to create ticket from form request // ${error}`;
    }
  };

  // the higher number have the most priority
  const priorities = ["1", "2", "3", "4", "5"];

  // common programming issue or topic to create a ticket
  const categories = [
    "Bug Fixing",
    "Testing",
    "Feature Development",
    "Refactoring",
    "Code Review",
    "Documentation",
    "Deployment/DevOps",
    "Performance Optimization",
    "Research and Investigation",
    "UI/UX",
  ];

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-green-50 p-14 h-fit rounded-lg shadow-lg shadow-gray-700"
      >
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            required
            id="title"
            name="title"
            type="text"
            placeholder="Enter title"
            className="w-full px-3 py-2 rounded-md border-2 border-pageGreen focus:border-pageGreen focus:outline-none"
            value={formData.title}
            onChange={handleChanges}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            required
            className="w-full px-3 py-2 rounded-md border-2 border-pageGreen focus:border-pageGreen focus:outline-none"
            value={formData.description}
            onChange={handleChanges}
          ></textarea>
        </div>

        {/* category */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            required
            className="w-full px-3 py-2 rounded-md border border-pageGreen focus:border-pageGreen focus:outline-none"
            value={formData.category}
            onChange={handleChanges}
          >
            <option value="">Select category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* priority */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Priority</label>
          <div className="flex flex-wrap">
            {priorities.map((priority) => (
              <label key={priority} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="priority"
                  className="mr-2 focus:ring-0"
                  value={priority}
                  onChange={handleChanges}
                  checked={formData.priority === priority}
                />
                {priority}
              </label>
            ))}
          </div>
        </div>

        {/* progress */}
        <div className="mb-4">
          <label
            htmlFor="progress"
            className="block text-gray-700 font-bold mb-2"
          >
            Progress: {formData.progress}
          </label>
          <input
            id="progress"
            name="progress"
            type="range"
            min="0"
            max="100"
            step="1"
            className="w-full appearance-none rounded-md h-3 bg-gray-300 outline-none focus:outline-none"
            value={formData.progress}
            onChange={handleChanges}
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-pageGreen text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300"
          >
            Edit
          </button>

          <Link href={"/"}>
            <button className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
