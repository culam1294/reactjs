import React, { useState } from "react";

export default function AddUser(props) {
  //render ra mot trong 2 nut
  const [isClick, setIsClick] = useState(true);
  //state tao doi tuong input
  const [username, setUsername] = useState("");
  const [permission, setPermission] = useState("");
  const [sexual, setSexual] = useState("");
  const [telephone, setTelephone] = useState("");
  //dong goi doi tuong
  const objAdd = {
    Username: username,
    Permission: permission,
    Sexual: sexual,
    Telephone: telephone
  };
  //khi click= render form + gui doi tuong den App.jsx
  const onClick = () => {
    setIsClick(!isClick);
    props.getUser(objAdd);
  };

//xu ly render
  if (isClick) {
    return <button className="btn" onClick={() => setIsClick(!isClick)}>Add user</button>;
  } else {
    return (
      <form>
        <input
          className="ipt"
          onChange={e => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <select className="ipt" onChange={e => setPermission(e.target.value)}>
          <option>Permission</option>
          <option>Nomal</option>
          <option>Manager</option>
          <option>Admin</option>
        </select>
        <select className="ipt" onChange={e => setSexual(e.target.value)}>
          <option>Sexual</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input
          className="ipt"
          onChange={e => setTelephone(e.target.value)}
          type="text"
          placeholder="Telephone"
        />
        <button className="btn" type="button" onClick={() => onClick()}>
          Add
        </button>
        <button className="btn-1" type="button" onClick={() => setIsClick(!isClick)}>
          Cancle
        </button>
      </form>
    );
  }
}
