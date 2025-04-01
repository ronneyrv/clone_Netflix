/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Header.css";
import { useParams, Link } from "react-router-dom";
import users from "../../backand/usersDB";


export default ({ black }) => {
  const { user } = useParams();

  const log = users.find((u) => u.user === user);

  return (
    <header className={black ? "black" : ""}>
      <div className="header-logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
        </Link>
      </div>
      <div className="header-user">
        <Link to="/">
          <img
            src={
              log
                ? log.avatar
                : "https://via.placeholder.com/50"
            }
            alt={log.user}
          />
        </Link>
      </div>
    </header>
  );
};
