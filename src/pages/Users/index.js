import React, { useEffect, useState } from "react";
import "./users.css";
import tmdb from "../../tmdb";
import FeatureMovieMean from "../../components/FeatureMovieMean/FeatureMovieMean";

export default function Users() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [originals, setOriginals] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);

      let originalsList = list.filter((i) => i.slug === "originals");
      setOriginals(originalsList[0]?.items.results || []);

      if (originalsList.length > 0) {
        changeFeaturedMovie(originalsList[0]?.items.results);
      }
    };

    loadAll();
  }, []);

  useEffect(() => {
    if (originals.length > 0) {
      const interval = setInterval(() => {
        changeFeaturedMovie(originals);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [originals]);

  const changeFeaturedMovie = async (movies) => {
    let randomIndex = Math.floor(Math.random() * movies.length);
    let chosen = movies[randomIndex];
    let chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");

    setFeaturedData(chosenInfo);
  };

  return (
    <div className="page">

      {featuredData && <FeatureMovieMean item={featuredData} />}

      {movieList.length <= 0 && (
        <div className="loading">
          <img src="https://i.gifer.com/8Etj.gif" alt="Carregando..." />
        </div>
      )}
    </div>
  );
}
