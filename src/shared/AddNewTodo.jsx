import { Check, X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../context/Todo";

function AddNewTodo() {
  const { todos, insertTodo } = useTodo();

  const [task, setTask] = useState({
    id: todos.lenght + 1,
    title: "",
    description: "",
    completed: false,
    createdAt: new Date().toISOString(),
  });

  const redirect = useNavigate();

  const handleSave = () => {
    insertTodo(task);
    redirect("/");
  };
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-10">Create New Task</h1>
      <div className="max-w-[500px] mx-auto my-10 bg-white rounded-xl p-10 shadow-xl">
        <div className="space-y-3">
          <div className="flex flex-col ">
            <label htmlFor="">Task Title</label>
            <input
              onChange={(evt) => setTask({ ...task, title: evt.target.value })}
              className=" border-gray-400 px-5 py-2 border-2 rounded-xl"
              value={task.title}
              type="text"
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="">Description</label>
            <textarea
              className=" border-gray-400 px-5 py-2 border-2 rounded-xl"
              onChange={(evt) =>
                setTask({ ...task, description: evt.target.value })
              }
              value={task.description}
              type="textfield"
            >
              {" "}
            </textarea>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              className="flex items-center justify-center gap-2 px-5 h-9 bg-blue-600 text-white rounded-lg"
              onClick={handleSave}
            >
              <Check /> Create task
            </button>
            <button
              className="flex justify-center items-center gap-2 px-5 h-9 bg-gray-300 text-black rounded-lg"
              onClick={() => redirect("/")}
            >
              <X /> Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewTodo;
