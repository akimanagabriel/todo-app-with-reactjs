import { Route, Routes } from "react-router-dom";
import Header from "./shared/Header";
import ListingPage from "./shared/ListingPage";
import AddNewTodo from "./shared/AddNewTodo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          index
          element={<ListingPage />}
        />

        <Route
          path="/new"
          element={<AddNewTodo />}
        />
      </Routes>
    </>
  );
}

export default App;
