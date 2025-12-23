import { HomeIcon, List, Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-linear-to-r from-blue-500 to-purple-700 from-60% text-white py-5">
      <div className="flex justify-between container mx-auto">
        <Link to={"/"}>
          <h1 className="font-bold text-3xl">Todo Manager</h1>
        </Link>
        <div className="flex gap-5">
          <Link
            className="flex items-center gap-2"
            to="/"
          >
            <HomeIcon size={16} /> Home
          </Link>
          <Link
            className="flex items-center gap-2 px-5 h-9 bg-white/30 rounded-lg"
            to="/"
          >
            <List size={16} />
            All Todos
          </Link>
          <Link
            className="flex items-center gap-2 px-5 h-9 bg-white/30 rounded-lg"
            to="/new"
          >
            <Plus size={16} />
            Add Todo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
