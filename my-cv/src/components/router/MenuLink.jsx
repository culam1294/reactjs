import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function MenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "*"}
      <Link
        style={{
          textDecoration: "none",
          margin: "5px",
          fontSize: "22px",
          padding: "7px"
        }}
        to={to}
      >
        {label}
      </Link>
    </div>
  );
}
