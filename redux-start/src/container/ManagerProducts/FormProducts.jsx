import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, Select, DatePicker, InputNumber } from "antd";

export default function FormProducts() {
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 40 }} layout="inline">
      <Form.Item>
        <Input placeholder="Product" />
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
  );
}
