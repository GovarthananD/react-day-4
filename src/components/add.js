import { useState } from "react";
import { API } from "./api";
import { useNavigate } from "react-router-dom";

function Add({ user, setUser }) {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = () => {
    const newUser = {
      id: id,
      name: name,
      age: age,
      gender: gender,
      city: city,
      state: state,
    };
    if (!id || !name || !age || !gender || !city || !state) {
      alert("All fields reuired");
      return;
    }
    fetch(`${API}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .then(() => navigate("/"))
      .catch((error) => {
        alert("something error" + error);
      });
  };

  return (
    <div>
      <h2>New Actor</h2>
      <div className="table">
        <ul className="list">
          <li>
            <input
              type="text"
              placeholder="Enter Id"
              onChange={(event) => setId(event.target.value)}
              value={id}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Enter Age"
              onChange={(event) => setAge(event.target.value)}
              value={age}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Enter Gender"
              onChange={(event) => setGender(event.target.value)}
              value={gender}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Enter City"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </li>
          <br />
          <li>
            <input
              type="text"
              placeholder="Enter State"
              onChange={(event) => setState(event.target.value)}
              value={state}
            />
          </li>
          <br />
          <li>
            <button onClick={handleSubmit}>Add Actor</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Add;
