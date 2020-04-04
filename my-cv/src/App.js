import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import AddUser from "./components/AddUser";
import callApi from "./../src/components/API/ApiCaller";

function App() {
  //state to render UI
  const [DataUser, setDataUser] = useState([]);

  useEffect(() => {
    callApi("users", "GET", null).then(res => {
      setDataUser(res.data);
    });
  }, []);

  //Add User
  const getUser =  objAdd => {
     callApi("users", "POST", objAdd).then(res => {
      let array = [...DataUser, res.data];
     setDataUser(array)
    });
    
  };
  //Search User
  const searchClick = search => {
    let array = [];
    DataUser.forEach(item => {
      if (item.Username.indexOf(search) !== -1) {
        array.push(item);
      }
    })
    setDataUser(array);
  };
  //Delete User
  const  deleteUser = Id => {
    let array = []

    array = DataUser.filter(item=>item.Id !== Id)
        setDataUser(array);

    callApi(`users/${Id}`, "DELETE", null).then(res => {
      console.log('da xoa', res.data)
    });

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
