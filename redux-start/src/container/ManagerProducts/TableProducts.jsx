import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Tag, Button } from "antd";
import callApi from "../../api/ApiCaller";

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
        <Tag color="geekblue">In Stock</Tag>
      ) : (
        <Tag color="error">Out Stock</Tag>
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

export default function TableProducts() {
  const [data, setData] = useState();
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await callApi("get", "products", null).then((res) => setData(res.data));
      setIsLoad(false);
    }
    fetchData();
  }, []);
  return <Table loading={isLoad} columns={columns} dataSource={data} />;
}
