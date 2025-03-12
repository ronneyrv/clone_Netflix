import React, { useEffect, useState } from "react";
import "./App.css";
import tmdb from "./tmdb";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";

export default function App() {
  const [movieList, setMuvieList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);

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

      setfeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData && <FeatureMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}
