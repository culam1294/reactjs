import React from "react";
import '../components/Table.css';
import TableRow from "./TableRow";

export default function Table() {
  return (
    <div>
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
          <TableRow/>
        </tbody>
      </table>
    </div>
  );
}
