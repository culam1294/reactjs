import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu,Avatar } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ManagerUsers from "./components/ManagerUsers/ManagerUsers";
import About from './components/router/Table/About'
import Home from "./components/Home";
import ListItem from "./components/ListItem";

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Router>
      <Layout className="layout" >
        <Header>
          <div className="logo" >
          <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </div>
          <Menu
            style={{ textAlign: "center" }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/listitem">ListItem</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/dashboard">
                <ManagerUsers />
              </Route>
              <Route path="/listitem">
                <ListItem />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
}
