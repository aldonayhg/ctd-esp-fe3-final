// src/Routes/Favs.jsx
import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div>                     
      <h1>Favoritos</h1>
      {state.favs.length === 0 ? (
        <p>Todavía no tienes favoritos </p>
      ) : (
        <div className="card-grid">
          {state.favs.map(fav => (
            <Card key={fav.id} {...fav} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favs;
