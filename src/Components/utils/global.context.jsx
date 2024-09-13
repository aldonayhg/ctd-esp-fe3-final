import axios from 'axios';
import React, { createContext, useReducer, useMemo, useEffect } from 'react';

// Estado inicial
const initialState = {
  theme: 'light',
  data: [],
  favs: JSON.parse(localStorage.getItem('favs')) || []
};

// Definir las acciones del reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'ADD_FAV':
      const newFavs = [...state.favs, action.payload];
      localStorage.setItem('favs', JSON.stringify(newFavs));
      return { ...state, favs: newFavs };
    case 'REMOVE_FAV':
      const updatedFavs = state.favs.filter(fav => fav.id !== action.payload);
      localStorage.setItem('favs', JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    default:
      return state;
  }
};

// Crear el contexto
export const ContextGlobal = createContext();

// Proveedor del contexto
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Obtener los datos de la API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'SET_DATA', payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
