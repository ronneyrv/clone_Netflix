import React, { useEffect } from "react";
import tmdb from "./tmdb";

export default function App() {

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  },[]);
  
  return (
    <div>
      Olá
    </div>
  );
}

