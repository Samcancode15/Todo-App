import { useEffect, useState } from "react";
import type { todo } from "./types/types";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<todo[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submit clicked");
    console.log(todos);
    e.preventDefault();
    if (input.trim()) {
      const todo: todo = {
        text: input,
        completed: false,
      };
      setTodos([...todos, todo]);
      setInput("");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <div className="w-full max-w-md">
        <div className="w-full flex mb-6">
          <h1 className="text-3xl font-bold text-[#4F4F4F] text-left">
            Your To Do
          </h1>
        </div>

        <form className="flex items-center mb-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add new task"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            className="border-b-2 border-[#9F9F9F] p-2 flex-grow focus:outline-none text-left"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
          </button>
        </form>

        <ul className="space-y-5 mb-5">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between font-semibold text-[#4F4F4F] p-3 border border-[#9F9F9F] rounded-2xl"
            >
              <input
                type="checkbox"
                className="h-5 w-5 accent-[#4F4F4F] ml-2 mr-3 font-semibold cursor-pointer"
                checked={todo.completed}
                onChange={() => {
                  const updatedTodos = [...todos];
                  updatedTodos[index].completed =
                    !updatedTodos[index].completed;
                  setTodos(updatedTodos);
                }}
              />

              <span
                className={`flex-grow text-left overflow-hidden text-ellipsis whitespace-nowrap ${
                  todo.completed ? "line-through text-[#9F9F9F]" : ""
                }`}
              >
                {todo.text}
              </span>

              <button
                className="text-[#4F4F4F] p-1 mr-2 font-bold cursor-pointer"
                onClick={() => {
                  setTodos(todos.filter((_, i) => i !== index));
                }}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        <div className="text-[#4F4F4F] italic font-semibold text-left mb-3">
          Your remaining todos :{" "}
          {todos.filter((todo) => !todo.completed).length}
        </div>

        <div className="text-[#9F9F9F] text-normal italic mt-3">
          <p className="text-left">
            "Doing what you love is the cornerstone of having abundance in your
            life" - Wayne Dyer
          </p>
        </div>

        <div
          className={`fixed inset-0 flex items-center justify-center bg-black/50 p-5 ${
            modalOpen ? "" : "hidden"
          }`}
        >
          <div className="bg-white p-7 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#4F4F4F] text-left">
                Warning
              </h2>
              <button
                className="text-[#4F4F4F] text-xl font-bold cursor-pointer"
                onClick={() => setModalOpen(false)}
              >
                ✖
              </button>
            </div>
            <p className="mt-2 text-[#4F4F4F] text-left">
              Please enter a task before adding.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
