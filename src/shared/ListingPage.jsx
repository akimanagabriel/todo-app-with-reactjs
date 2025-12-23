import React from "react";
import { useTodo } from "../context/Todo";
import { Circle, CircleCheck, Edit, Pencil, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function ListingPage() {
  const { todos } = useTodo();
  return (
    <div className="container mx-auto space-y-3 mt-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">All Tasks</h1>
        <Link
          className="flex items-center gap-2 px-5 h-9 bg-blue-600 text-white rounded-lg"
          to="/new"
        >
          <Plus size={16} /> Add new
        </Link>
      </div>
      {todos.map((task) => (
        <div
          key={task.id}
          className=" bg-white flex justify-between p-5 shadow rounded"
        >
          <div className="flex gap-3">
            <div>
              {task.completed ? (
                <CircleCheck className="text-green-600" />
              ) : (
                <Circle className="text-gray-300" />
              )}
            </div>
            <div>
              <h1 className="text-lg font-semibold">{task.title}</h1>
              <p className="text-gray-400">{task.description}</p>
              <small className="text-gray-400">
                Created: {task.createdAt.slice(0, 10)}
              </small>
            </div>
          </div>
          <div className="flex gap-3">
            <Pencil color="blue" />
            <Trash2 color="red" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListingPage;
