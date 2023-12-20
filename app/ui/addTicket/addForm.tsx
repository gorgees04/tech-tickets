"use client";

const addForm = () => {
  const ticketData = {
    title: "",
    description: "",
    category: "",
    priority: "1",
    progress: 0,
    status: "open",
  };

  const [formData, setFormData] = useState(ticketData);

  return (
    <div>
      <form className="w-full max-w-md mx-auto bg-green-50 p-14 h-fit rounded-lg shadow-lg shadow-gray-700">
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

        {/* status */}
        {/* <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
          Status
        </label>
        <select
          id="status"
          name="status"
          required
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-pageGreen focus:outline-none"
          value={formData.status}
          onChange={handleChanges}
        >
          <option value="">Select status</option>
          {statuses.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div> */}
        <button
          type="submit"
          className="bg-pageGreen text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default addForm;
