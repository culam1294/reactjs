import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import AddUser from "./components/AddUser";
import DataJson from "./components/Data.json";

function App() {
  //state to render UI
  const [DataUser, setDataUser] = useState([]);
  //Fetching data before
  useEffect(() => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify(DataJson));
      let data = JSON.parse(localStorage.getItem("data"));
      setDataUser(data);
    } else {
      let data = JSON.parse(localStorage.getItem("data"));
      setDataUser(data);
    }
  }, []);

  //Add User
  const getUser = objAdd => {
    let array = [...DataUser, objAdd];
    setDataUser(array);
    localStorage.setItem("data", JSON.stringify(array));
  };
  //Search User
  const searchClick = search => {
    let array = [];
    let data = JSON.parse(localStorage.getItem("data"));
    data.forEach(item => {
      if (item.Username.indexOf(search) !== -1) {
        array.push(item);
      }
    });
    setDataUser(array);
  };
  //Delete User
  const deleteUser = key => {
    let array = [...DataUser];
    array.splice(key, 1);
    setDataUser(array);
    localStorage.setItem("data", JSON.stringify(array));
  };

  return (
    <div className="App">
      <Header />
      <SearchBar searchClick={search => searchClick(search)} />
      <Table Data={DataUser} deleteUser={key => deleteUser(key)} />
      <AddUser getUser={objAdd => getUser(objAdd)} />
    </div>
  );
}

export default App;
