import React from "react";
import "antd/dist/antd.css";
import TableProducts from "./TableProducts";
import FormProducts from "./FormProducts";

export default function ManagerProducts() {
  return (
    <>
      <TableProducts />
      <FormProducts/>
    </>
  );
}
