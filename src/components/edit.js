import { useEffect, useState } from "react";
import { API } from "./api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`${API}/users/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setUser(mv));
  }, [id]);
  if (user) {
    return <Edituserform user={user} />;
  } else {
    return "Loading...";
  }
}

function Edituserform({ user }) {
  const navigate = useNavigate();
  const [id, setId] = useState(user.id);
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);

  const submit = () => {
    const updateUser = {
      id: id,
      name: name,
      age: age,
      gender: gender,
      city: city,
      state: state,
    };
    fetch(`${API}/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateUser),
    })
      .then((data) => data.json())
      .then(() => navigate("/"));
  };

  return (
    <div>
      <h2>Edit Details</h2>
      <div className="table">
        <ul className="list">
          <li>
            <input
              type="text"
              placeholder="Enter Id"
              onChange={(event) => setId(event.target.value)}
              value={id}
            />
          </li><br/>
          <li>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </li><br/>
          <li>
            <input
              type="text"
              placeholder="Enter Age"
              onChange={(event) => setAge(event.target.value)}
              value={age}
            />
          </li><br/>
          <li>
            <input
              type="text"
              placeholder="Enter Gender"
              onChange={(event) => setGender(event.target.value)}
              value={gender}
            />
          </li><br/>
          <li>
            <input
              type="text"
              placeholder="Enter City"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </li><br/>
          <li>
            <input
              type="text"
              placeholder="Enter State"
              onChange={(event) => setState(event.target.value)}
              value={state}
            />
          </li><br/>
          <li>
            <button onClick={submit}>Update</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Edit;
