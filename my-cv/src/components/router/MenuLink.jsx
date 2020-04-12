import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function MenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <ul className="link">
      <li className={match ? "active" : ""}>
        {match && ""}
        <Link to={to}>{label}</Link>
      </li>
    </ul>
  );
}
