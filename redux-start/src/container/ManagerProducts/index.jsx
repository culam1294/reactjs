import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import {
  Table,
  Tag,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
} from "antd";
import callApi from "../../api/ApiCaller";
import FormAdd from "./FormAdd";

const columns = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    render: (product) => <p style={{ color: "#0000bb" }}>{product}</p>,
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
    render: (cost) => cost + "$",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "JoinDay",
    dataIndex: "joinday",
    key: "joinday",
  },
  {
    title: "Stock",
    key: "stock",
    dataIndex: "stock",
    render: (stock) =>
      stock ? (
        <Tag color="green">In Stock</Tag>
      ) : (
        <Tag color="red">Out Stock</Tag>
      ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <span>
        <Button type="primary" size="small">
          Edit
        </Button>
        <Button type="danger" size="small">
          Delete
        </Button>
      </span>
    ),
  },
];

export default function ManagerProducts() {
  const [data, setData] = useState();
  const [isLoad, setIsLoad] = useState(true);  

  useEffect(() => {
    async function fetchData() {
      await callApi("get", "products", null).then((res) => setData(res.data));
      setIsLoad(false);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Table loading={isLoad} columns={columns} dataSource={data} />

      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 40 }} layout="inline">
        <Form.Item>
          <Input  placeholder="Product" />
        </Form.Item>
        <Form.Item>
          <InputNumber placeholder="Cost" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Description" />
        </Form.Item>
        <Form.Item>
          <Select placeholder="Stock">
            <Select.Option value="In Stock">In Stock</Select.Option>
            <Select.Option value="Out Stock">Out Stock</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <DatePicker placeholder="JoinDay" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Add</Button>
        </Form.Item>
      </Form>
      <FormAdd/>
    </div>
  );
}
