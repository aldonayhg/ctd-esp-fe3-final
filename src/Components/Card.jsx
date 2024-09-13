// src/Components/Card.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const newFav = { id, name, username };
    dispatch({ type: "ADD_FAV", payload: newFav });
  };

  const removeFav = () => {
    dispatch({ type: "REMOVE_FAV", payload: id });
  };

  // Verificar si el dentista ya está en favoritos
  const isFav = state.favs.some(fav => fav.id === id);

  return (
    <div className="card">
      <div>
      <img src="./images/doctor.jpg" alt="doctor"/>
      </div>
      <div>
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      {isFav ? (
        <button onClick={removeFav} className="favButton">💚</button> //Remove Fav
      ) : (
        <button onClick={addFav} className="favButton">💛</button> //Add Fav
      )}
      </div>
    </div>
  );
};

export default Card;
