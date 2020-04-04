import React from "react";

export default function TableRow(props) {
  const deleteUser = Id => {
    props.deleteUser(Id);
  };
  const Data = props.Data;
  const showRow = Data.map((value, key) => (
    <tr className="table-row" key={key}>
      <td>{value.Id}</td>
      <td>{value.Username}</td>
      <td>{value.Permission}</td>
      <td>{value.Sexual}</td>
      <td>{value.Telephone}</td>
      <td>
        <button className="btn">Sửa</button>
        <button className="btn-1" onClick={() => deleteUser(value.Id)}>
          Xóa
        </button>
      </td>
    </tr>
  ));
  return showRow;
}
