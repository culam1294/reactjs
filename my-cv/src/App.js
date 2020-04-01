import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import AddUser from "./components/AddUser";
import DataJson from "./components/Data.json";

function App() {
  //Fetching data before
  useEffect(() => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify(DataJson));
      const dataLocal = JSON.parse(localStorage.getItem("data"));
      setDataUser(dataLocal);
    } else {
      const dataLocal = JSON.parse(localStorage.getItem("data"));
      setDataUser(dataLocal);
    }
  }, []);

  //state to render UI
  const [DataUser, setDataUser] = useState([]);

  //AddUser
  const getUser = objAdd => {
    const TG = [...DataUser, objAdd];
    setDataUser(TG);
    localStorage.setItem("data", JSON.stringify(TG));
  };
  //Search
  const searchClick = search => {
    const array = [];
    const dataLocal = JSON.parse(localStorage.getItem("data"));

    dataLocal.forEach(item => {
      if (item.Username.indexOf(search) !== -1) {
        array.push(item);
      }
    });
    setDataUser(array);
  };

  const deleteUser = key => {
    const dataNew = DataJson.filter(item => {
      return console.log(item.key);
      // item.key !== key
    });
    console.log(dataNew);
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
