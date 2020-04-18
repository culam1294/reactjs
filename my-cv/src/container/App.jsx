import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Avatar } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "../components/router/constantRoutes";

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <Avatar
              className="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </div>
          <Menu
            style={{ textAlign: "center" }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["0"]}
          >
            {routes.map((route, i) => (
              <Menu.Item key={`${i}`}>
                <Link to={`/${route.path}`}>{route.path}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Switch>
              {routes.map((route, i) => (
                <Route path={`/${route.path}`} component={route.component} />
              ))}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Project Reactjs by @LamNguyen
        </Footer>
      </Layout>
    </Router>
  );
}
