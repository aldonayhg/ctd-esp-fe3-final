import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import axios from 'axios';


const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    if (id) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => setDentist(response.data)) 
        .catch((error) => console.error('Error fetching dentist data:', error));
    }
  }, [id]);

  if (!dentist) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dentista {dentist.id}</h1>
      
      <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Sitio Web</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{dentist.name}</td>
          <td>{dentist.email}</td>
          <td>{dentist.phone}</td>
          <td>{dentist.website}</td>
        </tr>
      </tbody>
    </table>

    </div>
  );
};

export default Detail;
