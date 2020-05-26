import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Tag, Button, Typography } from "antd";
import callApi from "../../api/ApiCaller";

const { Title } = Typography;

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
    render: (cost) => <p style={{ fontWeight: "bold" }}>{`${cost} $`}</p>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (description) => (
      <p style={{ fontStyle: "italic" }}>{description}</p>
    ),
  },
  {
    title: "Stock",
    key: "stock",
    dataIndex: "stock",
    render: (stock) =>
      stock ? (
        <Tag color="green">In Stock</Tag>
      ) : (
        <Tag color="orange">Out Stock</Tag>
      ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <span>
        <Button
          primary="true"
          size="small"
          style={{ margin: 5, border: "1px solid blue" }}
        >
          Edit
        </Button>
        <Button danger size="small">
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
      await callApi("get", "table", null)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
      setIsLoad(false);
    }
    fetchData();
  }, []);

  return (
    <Table
      title={() => <Title type="danger">TABLE MANAGEMENT</Title>}
      bordered={true}
      loading={isLoad}
      columns={columns}
      dataSource={data}
    />
  );
}
