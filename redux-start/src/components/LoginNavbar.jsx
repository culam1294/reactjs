import React from "react";
import { Button, Avatar, Popconfirm, Badge } from "antd";
import { QuestionCircleOutlined, UserOutlined } from "@ant-design/icons";
import ModalFormLogin from "./ModalFormLogin";
import ModalFormSignin from "./ModalFormSignin";
import { useSelector, useDispatch } from "react-redux";
import { isLogin } from "../action/IsLogin";

export default function LoginNavbar() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const loginMenu = () => (
    <>
      <ModalFormLogin />
      <ModalFormSignin />
    </>
  );
  const logoutMenu = () => (
    <div style={{ marginTop: 10, display:"flex" }}>
      <Badge count={1}>
        <Avatar
          style={{ backgroundColor: "#87d068"}}
          icon={<UserOutlined />}
        />
      </Badge>
      <Popconfirm
        placement="bottomRight"
        onConfirm={() => dispatch(isLogin())}
        title="Are you sure Logout？"
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      >
        <Button type="link" style={{marginLeft: 10}}>Logout</Button>
      </Popconfirm>
    </div>
  );
  return (
    <div style={{display:"flex"}}>
      {login ? logoutMenu() : loginMenu()}
    </div>
  );
}
