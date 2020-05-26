import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes";
import { useSelector, useDispatch } from "react-redux";
import {selectMenuX} from './action/SelectMenu'; 

function App() {
  const { Content, Footer } = Layout;
  const selectMenu = useSelector((state) => state.selectMenu)
  const dispatch = useDispatch();

  const routerComponent = routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      children={<route.main />}
    />
  ));

  const menuHeader = routes.map((route, index) => (
    <Menu.Item key={index}>
      <Link to={route.path}>{route.title}</Link>
    </Menu.Item>
  ));
  const onClickMenu=(e)=>{
    dispatch(selectMenuX(e.key))
  }
  return (
    <Router>
      <Layout className="layout">
        <Menu onClick={(e)=>onClickMenu(e)} subMenuCloseDelay={0} theme="light" mode="horizontal" selectedKeys={[selectMenu]} defaultSelectedKeys={["0"]}>
          {menuHeader}
        </Menu>
        <Content>
          <Switch>{routerComponent}</Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>My project using Reactjs, Redux, Ant Design, React-router</Footer>
      </Layout>
    </Router>
  );
}

export default App;
