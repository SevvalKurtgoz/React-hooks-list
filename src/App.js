import React, { useState } from "react";
import "./styles.css";
import UserList from "./UserList";

const data = [
  { id: 1,  name: "Şevval",   email: "Sevval@test.com",  age: 21,  color: "lightblue" },
  { id: 2,  name: "Cansu",  email: "cansu@test.com", age: 23,  color: "honeydew"  },
  { id: 3,  name: "Ayşe",     email: "ayse@test.com",    age: 18,  color: "mistyrose" },
  { id: 3,  name: "Mahsun",     email: "Mahsun@test.com",    age: 10,  color: "lightgreen" }
];

const App = () => {
  const [users, setUsers] = useState(data);

  const changeColor = (id, color) =>
    setUsers(
      users.map(user => (user.id === id ? { ...user, color: color } : user))
    );

  return (
    <div className="App">
      <header>
        <h1>Hoşgeldiniz :) </h1>
      </header>
      <UserList users={users} changeColor={changeColor} />
    </div>
  );
};

export default App;
