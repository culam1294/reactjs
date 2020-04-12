import React, { useState, useEffect } from "react";
import callApi from '../API/ApiCaller';

import Header from "./Header";
import SearchBar from "./SearchBar";
import Table from "./Table";
import AddUser from "./AddUser";
////////////////
const s = "javascriptloops";
const k = 'ueoai';


///////////////////
export default function ManagerUsers() {

//state to render UI
const [DataUser, setDataUser] = useState([]);

useEffect(() => {
  callApi("users", "GET", null).then((res) => {
    setDataUser(res.data);
  });
}, []);

//Add User
const getUser = (objAdd) => {
  callApi("users", "POST", objAdd).then((res) => {
    let array = [...DataUser, res.data];
    setDataUser(array);
  });
};
//Search User
const searchClick = (search) => {
  let array = [];
  callApi("users", "GET", null).then((res) => {
    res.data.forEach((item) => {
      if (item.Username.indexOf(search) !== -1) {
        array.push(item);
      }
    });
    setDataUser(array);
  });
};
//Delete User
const deleteUser = (Id) => {
  let array = [];
  array = DataUser.filter((item) => item.Id !== Id);
  setDataUser(array);
  callApi(`users/${Id}`, "DELETE", null).then((res) => {});
};

    return (
        <div>
            <div className="App">
              <Header />
              <SearchBar searchClick={(search) => searchClick(search)} />
              <Table Data={DataUser} deleteUser={(key) => deleteUser(key)} />
              <AddUser getUser={(objAdd) => getUser(objAdd)} />
            </div>
        </div>
    )
}
