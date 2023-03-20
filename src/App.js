import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import AddUser from "./users/AddUser";

import Home from "./pages/Home";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
function App() {
  return (
    <div className="h-screen App dark:bg-gray-900">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addEmployee" element={<AddUser />} />
        <Route exact path="/editUser/:id" element={<EditUser />} />
        <Route exact path="/viewUser/:id" element={<ViewUser />} />
      </Routes>
    </div>
  );
}

export default App;
