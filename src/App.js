import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Edit from "./components/edit";
import Add from "./components/add";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="edit/Edit/:id" element={<Edit />} />
          <Route path="add" element={<Add user={user} setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
