/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeatureMovieMean.css";
import UserRow from "../UserRow/UserRow";
import AddIcon from "@mui/icons-material/Add";

export default ({ item }) => {
  const [hover, setHover] = useState(false);
  let genres = [];
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
  const navigate = useNavigate();

  const addProfile = () => {
    navigate("/perfil");
  };

  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featuredMean"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featuredMean-vertical">
        <div className="featuredMean-horizontal">
          <div className="user-area">
            <div>
              <img className="log-netflix"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
                alt="Netflix"
              />
              <h4>Escolha um perfil</h4>
              {storedUsers.map((item, key) => (
                <UserRow key={key} user={item.user} avatar={item.avatar} />
              ))}
              <div className="userRow-item">
                <div className="userAdd-listarea">
                  <div
                    className="userAdd-icon"
                    onClick={() => addProfile()}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                      transform: hover ? "scale(1)" : "scale(0.9)",
                      transition: "transform 0.2s ease-in-out",
                    }}
                  >
                    <AddIcon
                      style={{
                        width: 40,
                        height: 110,
                        transform: hover ? "scale(1)" : "scale(0.9)",
                        transition: "transform 0.2s ease-in-out",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="add-area"
                  onClick={() => addProfile()}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <h2
                    className="Add-h2"
                    style={{
                      opacity: hover ? 1 : 0,
                      transition: "opacity 0.2s ease-in-out",
                    }}
                  >
                    Criar Perfil
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="featuredMean-content">
            <div className="featuredMean-name">{item.original_name}</div>
            <div className="featuredMean-info">{genres.join(" • ")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
