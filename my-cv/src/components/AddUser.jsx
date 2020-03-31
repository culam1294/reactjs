import React, { useState } from "react";

export default function AddUser() {
  const [isClick, setIsClick] = useState(true);
  const [username, setUsername] = useState('')
  const [permission, setPermission] = useState('')
  const [sexual, setSexual] = useState('')
  const [telephone, setTelephone] = useState('')

const objAdd = {
    Username : username,
    Permission: permission,
    Sexual: sexual,
    Telephone: telephone
}

console.log(objAdd);

  if (isClick) {
    return <button onClick={() => setIsClick(!isClick)}>Add user</button>;
  } else {
    return (
      <form>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username" />
        <select onChange={(e)=>setPermission(e.target.value)} >
          <option>Nomal</option>
          <option>Manager</option>
          <option>Admin</option>
        </select>
        <select onChange={(e)=>setSexual(e.target.value)} >
          <option>Male</option>
          <option>Female</option>
        </select>
        <input onChange={(e)=>setTelephone(e.target.value)} type="text" placeholder="Telephone" />
        <button onClick={() => setIsClick(!isClick)}>Add</button>
      </form>
    );
  }
}
