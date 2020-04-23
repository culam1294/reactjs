import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, InputNumber } from "antd";

export default function ModalForm() {
  const [Visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const onFinish = (value) => {
    console.log(value);
    setVisible(false);
  };

  return (
    <>
      <Button block type="primary" onClick={() => showModal()}>
        Add a Product
      </Button>
      <Modal
        closable={false}
        title="Add a product into the table"
        visible={Visible}
        footer={null}
      >
        <Form
          initialValue={true}
          onFinish={onFinish}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
        >
          <Form.Item name="products">
            <Input placeholder="Product" />
          </Form.Item>
          <Form.Item name="cost">
            <InputNumber placeholder="Cost" />
          </Form.Item>
          <Form.Item name="description">
            <Input placeholder="Description" />
          </Form.Item>
          <Form.Item name="stock">
            <Select placeholder="Stock">
              <Select.Option value="In Stock">In Stock</Select.Option>
              <Select.Option value="Out Stock">Out Stock</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button style={{ margin: 5 }} type="primary" htmlType="submit">
              Add
            </Button>
            <Button onClick={() => setVisible(false)}>Cancel</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
