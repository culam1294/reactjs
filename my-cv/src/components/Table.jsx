import React from "react";
import '../components/Table.css';
import TableRow from "./TableRow";

export default function Table(props) {
  return (
    
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Permission</th>
            <th>Sexual</th>
            <th>Telephone</th>
            
          </tr>
        </thead>
        <tbody>
          <TableRow 
          Data={props.Data}
          />
        </tbody>
      </table>
  );
}
