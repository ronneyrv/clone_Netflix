import React, { useEffect, useState } from "react";
import "../Home/home.css";
import tmdb from "../../tmdb";
import MovieRow from "../../components/MovieRow/MovieRow";
import FeatureMovie from "../../components/FeatureMovie/FeatureMovie";
import Header from "../../components/Header";

export default function Home() {
  const [movieList, setMuvieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMuvieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randonChosen = Math.floor(
        Math.random() * originals[0].items.results.length
      );
      let chosen = originals[0].items.results[randonChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");

      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeatureMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Direitos de imagem para Netflix
        <br />
        Dados do site Themoviedb.org
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img src="https://i.gifer.com/8Etj.gif" alt="Carregando..." />
        </div>
      )}
    </div>
  );
}
