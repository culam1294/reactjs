import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import AddUser from "./components/AddUser";
import Data from "./components/Data.json";

function App() {
  const [DataUser, setDataUser] = useState(Data);
  //Search khi nhấn click
  const searchClick = search => {
    const array = [];
    Data.forEach(item => {
      if (item.Username.indexOf(search) !== -1) {
        array.push(item);
      }
    });
    setDataUser(array);
  };
  //Xu ly khi nhan add
  

  return (
    <div>
      <Header />
      <SearchBar searchClick={search => searchClick(search)} />
      <Table Data={DataUser} />
      <AddUser />
    </div>
  );
}

export default App;
