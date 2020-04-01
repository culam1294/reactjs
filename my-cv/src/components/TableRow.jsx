import React from "react";

export default function TableRow(props) {
  const deleteUser = key => {
    props.deleteUser(key);
  };
  const Data = props.Data;
  const showRow = Data.map((value, key) => (
    <tr className="table-row" key={key}>
      <td>{key + 1}</td>
      <td>{value.Username}</td>
      <td>{value.Permission}</td>
      <td>{value.Sexual}</td>
      <td>{value.Telephone}</td>
      <td>
        <button className="btn">Sửa</button>
        <button className="btn-1" onClick={() => deleteUser(key)}>
          Xóa
        </button>
      </td>
    </tr>
  ));
  return showRow;
}
