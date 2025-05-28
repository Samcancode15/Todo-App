import "./App.css";

function App() {
  return (
    <>
      <div className="w-full max-w-md">
        <div className="w-full flex mb-6">
          <h1 className="text-3xl font-bold text-[#4F4F4F]">Your To Do</h1>
        </div>

        <form className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Add new task"
            className="border-b-2 border-[#9F9F9F] p-2 flex-grow focus:outline-none"
          ></input>

          <button
            type="submit"
            className="ml-4 bg-[#4F4F4F] text-white p-2 rounded-xl focus:outline-none cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
          </button>
        </form>

        <ul className="space-y-5 mb-5">
          <li className="flex items-center justify-between font-semibold text-[#4F4F4F] p-3 border border-[#9F9F9F] rounded-2xl">
            <input
              type="checkbox"
              className="h-5 w-5 text-[#4F4F4F] ml-2 mr-3 font-semibold cursor-pointer"
            />

            <span className="flex-grow text-left">1</span>

            <button className="text-[#4F4F4F] p-1 mr-2 font-bold cursor-pointer">
              ✖
            </button>
          </li>
        </ul>

        <div className="text-[#4F4F4F] italic font-semibold text-left mb-3">
          Your remaining todos :
        </div>
      </div>
    </>
  );
}

export default App;
