/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./FeatureMovie.css";

export default ({ item }) => {
  let fistDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  
  let desccripition = item.overview;
  if(desccripition.length > 200) {
    desccripition = desccripition.substring(0, 200) + '...';
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average} pontos</div>
            <div className="featured-year">{fistDate.getFullYear()}</div>
            <div className="featured-seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured-description">{desccripition}</div>
          <div className="featured-buttons">
            <a href="" className="featured-watchbuttons">
              ► Assistir
            </a>
            <a href="" className="featured-mylistbuttons">
              + Minha Lista
            </a>
          </div>
          <div className="featured-genres">
            <strong>Gêneros:</strong> {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
