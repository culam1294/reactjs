import React, { useState } from "react";
import { Form, Input, Button, Select, InputNumber } from "antd";
import { CloseSquareTwoTone, EditTwoTone } from "@ant-design/icons";
import callApi from "./../../API/ApiCaller";

function FormAddUser() {
  const [data, setData] = useState();

  const [load, setLoad] = useState(false);

  const onClick = async () => {
    setLoad(true);
    const user = await callApi("get", "users", null);
    console.log(user.data);
    setLoad(false);
  };

  return (
    <div>
      <Form
        labelCol={{
          span: 15,
        }}
        wrapperCol={{
          span: 50,
        }}
        layout="inline"
      >
        <Form.Item>
          <Input placeholder="UserName" />
        </Form.Item>
        <Form.Item>
          <Select placeholder="Permission">
            <Select.Option value="Admin">Admin</Select.Option>
            <Select.Option value="Manager">Manager</Select.Option>
            <Select.Option value="Normal">Normal</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Input placeholder="UserName" />
        </Form.Item>
        <Form.Item>
          <InputNumber placeholder="Age" />
        </Form.Item>
        <Form.Item>
          <Button style={{ margin: "5px" }}>
            <EditTwoTone />
            Edit
          </Button>
          <Button
          danger
          icon={<CloseSquareTwoTone />}
          loading={load}
          onClick={onClick}
        >
          Close
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default FormAddUser;
