import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import AddUser from "./components/AddUser";
import callApi from "./../src/components/API/ApiCaller";
import Home from "./components/Home";
import About from "./components/About";
import Title1 from "./components/Title1";
import Title2 from "./components/Title2";
import Title3 from "./components/Title3";

function App() {
  //state to render UI
  const [DataUser, setDataUser] = useState([]);

  useEffect(() => {
    callApi("users", "GET", null).then(res => {
      setDataUser(res.data);
    });
  }, []);

  //Add User
  const getUser = objAdd => {
    callApi("users", "POST", objAdd).then(res => {
      let array = [...DataUser, res.data];
      setDataUser(array);
    });
  };
  //Search User
  const searchClick = search => {
    let array = [];
    callApi("users", "GET", null).then(res => {
      res.data.forEach(item => {
        if (item.Username.indexOf(search) !== -1) {
          array.push(item);
        }
      });
      setDataUser(array);
    });
  };
  //Delete User
  const deleteUser = Id => {
    let array = [];
    array = DataUser.filter(item => item.Id !== Id);
    setDataUser(array);
    callApi(`users/${Id}`, "DELETE", null).then(res => {});
  };

  return (
    <Router>
      <div>
        <nav>
          <ul className="redirect-ul">
            <li>
              <NavLink to="/home" activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
            <NavLink to="/about" activeClassName="selected">
                About
              </NavLink>
            </li>
            <li>
            <NavLink to="/users" activeClassName="selected">
                Users
              </NavLink>
            </li>
            <li>
            <NavLink to="/title1" activeClassName="selected">
                Title1
              </NavLink>
            </li>
            <li>
            <NavLink to="/title2" activeClassName="selected">
                Title2
              </NavLink>
            </li>
            <li>
            <NavLink to="/title3" activeClassName="selected">
                Title3
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/title1">
            <Title1 />
          </Route>
          <Route path="/title2">
            <Title2 />
          </Route>
          <Route path="/title3">
            <Title3 />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <div className="App">
              <Header />
              <SearchBar searchClick={search => searchClick(search)} />
              <Table Data={DataUser} deleteUser={key => deleteUser(key)} />
              <AddUser getUser={objAdd => getUser(objAdd)} />
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
