/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserRow.css";
import CreateIcon from "@mui/icons-material/Create";

export default ({ user, avatar }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  
  const edit = (props) => {
    navigate(`/perfil/${user}`);
  };

  const profile = (user) => {
    navigate(`/home/${user}`);
  };

  return (
    <div className="userRow">
      <div
        className="userRow-item"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          cursor: "pointer",
        }}
      >
        <div
          className="userRow-button"
          style={{
            opacity: hover ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          <CreateIcon
            style={{
              cursor: "pointer",
            }}
            onClick={() => edit(user)}
          />
        </div>
        <div className="userRow-listarea">
          <div className="userRow-list">
            <div className="userRow-avatar">
              <img
                src={avatar}
                alt={user}
                onClick={() => profile(user)}
                style={{
                  transform: hover ? "scale(1)" : "scale(0.9)",
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </div>
          </div>
        </div>
        <h2
        className="userRow-button"
          onClick={() => profile(user)}
          style={{
            opacity: hover ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          {user}
        </h2>
      </div>
    </div>
  );
};
