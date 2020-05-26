import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, InputNumber, message } from "antd";
import callApi from "../../api/ApiCaller";

export default function ModalForm() {

  const [visible, setVisible] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const onFinish = async (value) => {
    await callApi("post", "products", value).catch((err) => console.log(err));
    setVisible(false);
    setIsLoad(false);
    message.success("Add new product success!");
  };
  const onFinishFailed = (err) => {
    console.log("Failed:", err);
    setIsLoad(!isLoad);
  };

  const onCancel = () => {
    setVisible(false);
    setIsLoad(false);
  };
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
    setIsLoad(false);
  };

  return (
    <>
      
      <Button block type="primary" onClick={() => setVisible(true)}>
        Add a Product
      </Button>
      <Modal
        closable={false}
        title="Add a product into the table"
        visible={visible}
        footer={null}
      >
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
        >
          <Form.Item rules={[{ required: true }]} name="product">
            <Input placeholder="Product" />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="cost">
            <InputNumber min={0} placeholder="Cost" />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="description">
            <Input placeholder="Description" />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="stock">
            <Select placeholder="Stock">
              <Select.Option value="In Stock">In Stock</Select.Option>
              <Select.Option value="Out Stock">Out Stock</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              onClick={() => setIsLoad(!isLoad)}
              loading={isLoad}
              type="primary"
              htmlType="submit"
            >
              Add
            </Button>
            <Button style={{ margin: 5 }} onClick={() => onReset()}>
              Reset
            </Button>
            <Button onClick={() => onCancel()}>Cancel</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
