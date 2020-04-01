import React from "react";
import '../components/Table.css';
import TableRow from "./TableRow";

export default function Table(props) {
  const deleteUser =(key)=>{
    props.deleteUser(key)
  }
  return (
    
      <table className="table">
        <thead>
          <tr>
            <th>Stt</th>
            <th>Username</th>
            <th>Permission</th>
            <th>Sexual</th>
            <th>Telephone</th>
            <th>Sửa/Xóa</th>
            
          </tr>
        </thead>
        <tbody>
          <TableRow 
          Data={props.Data}
          deleteUser={(key)=>deleteUser(key)}
          />
        </tbody>
      </table>
  );
}
