import React from "react";
import "antd/dist/antd.css";
import TableProducts from "./TableProducts";
import ModalForm from "./ModalForm";

export default function ManagerProducts() {
  return (
    <>
      <TableProducts />
      <ModalForm/>
    </>
  );
}
