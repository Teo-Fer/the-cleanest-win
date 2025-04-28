import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // tu conexión a firebase
import { collection, getDocs } from 'firebase/firestore';
import './Home.css'; // puro CSS
import fondo from '../assets/fondo.jpeg'; 
 import medallaImg from '../assets/medalla.png'; 
 import { FastfoodSharp } from '@mui/icons-material';
 import { CoffeeSharp } from '@mui/icons-material';
 import { SanitizerSharp } from '@mui/icons-material';
const Home = () => {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    const fetchEquipos = async () => {
      const querySnapshot = await getDocs(collection(db, 'equipos'));
      const equiposData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEquipos(equiposData);
    };

    fetchEquipos();
  }, []);

  return (
    <div className="home-container" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="equipos-wrapper">
        {equipos.map(equipo => (
          <div className="equipo-card" key={equipo.id}>
            <h2>{equipo.nombre}</h2>
            <ul>
              {equipo.integrantes.map((integrante, index) => (
                <li key={index}>{integrante}</li>
              ))}
            </ul>
            <div className="medallas">
              {Array.from({ length: equipo.medallas }).map((_, index) => (
                <img src={medallaImg} key={index} className="medalla-icon" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
