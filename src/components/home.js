import * as React from "react";
import { useState } from "react";
import { API } from "./api";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm(
      "really you want to delete the actor from the list"
    );
    if (confirm) {
      axios
        .delete(`${API}/users/` + id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <table className="users">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>City</th>
            <th>State</th>
            <th>
              <button className="add" onClick={() => navigate("/add")}>
                Add Actor
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.map((actor) => {
              return (
                <tr>
                  <td>{actor.id}</td>
                  <td>{actor.name}</td>
                  <td>{actor.age}</td>
                  <td>{actor.gender}</td>
                  <td>{actor.city}</td>
                  <td>{actor.state}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/edit/Edit/${actor.id}`)}
                      className="add"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(actor.id)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
