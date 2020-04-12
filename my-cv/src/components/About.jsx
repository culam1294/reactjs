import React from "react";
import { Typography, Table, Tag } from "antd";

const { Title } = Typography;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="# "> {text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="# " style={{ marginRight: 16 }}>Invite {record.name}</a>
        <a href="# " onClick={() => onClick()}>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

data.forEach((item) => {
  // console.log(item.key);
});

const onClick = () => {
  // console.log("da xoa");
};
export default function About() {
  return (
    <div>
      <Title style={{ textAlign: "center", paddingTop: "5px" }}>
        Bảng quản lý users
      </Title>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
