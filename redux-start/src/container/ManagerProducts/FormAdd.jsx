import React from "react";
import { useForm } from "react-hook-form";
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

export default function FormAdd() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };
const a =1
const b = 0
const c = []
const d = ''
const e = {}

  console.log(a||b);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message}

      <input
        name="username"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.username && errors.username.message}

      <button type="submit">Submit</button>
    </form>
  );
};