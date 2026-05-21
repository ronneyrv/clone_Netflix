/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Header.css";
import { useParams, Link } from "react-router-dom";
import netflixLogo from '../../assets/netflix-logo.jpg';

export default ({ black }) => {
  const { user } = useParams();
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const log = users.find((u) => u.user === user);

  return (
    <header className={black ? "black" : ""}>
      <div className="header-logo">
        <Link to="/">
          <img
            src={netflix-logo.jpg}
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
