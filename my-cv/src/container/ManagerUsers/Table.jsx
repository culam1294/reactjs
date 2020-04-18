import React from "react";
import './Table.css';
import TableRow from "./TableRow";

export default function Table(props) {
  const deleteUser =Id=>{
    props.deleteUser(Id)
  }
  return (
    
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
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
          deleteUser={(Id)=>deleteUser(Id)}
          />
        </tbody>
      </table>
  );
}
