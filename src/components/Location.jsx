import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageContainer from './PageContainer';
import SearchLocation from './SearchLocation';

const Location = ({ location , setLocation }) => {

  const changeLocation = (Id) => {
    axios.get(`https://rickandmortyapi.com/api/location/${Id}`)
      .then(res => setLocation(res.data))
  };


  return (
    <div className='container-of-everything'>

      < SearchLocation changeLocation={changeLocation} />

      <h1>Rick and Morty</h1>

      <div className='location-container'>

        <h2>{location.name}</h2>
        <div>
          <h3>
            Type: <br /> {location.type}
          </h3>
          <h3>
            Dimension: <br /> {location.dimension}
          </h3>
          <h3>
            Number of residents: <br /> {location.residents?.length}
          </h3>
        </div>
      </div>

      <main>
        <PageContainer location={location} />
      </main>

      <footer className='footer'>

        <h2> Developers </h2>
        <h4>Oscar Tandioy  &  Jesús Escalona</h4>

        <a href="https://github.com/CciClo/Entrgable3" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        
      </footer>
    </div>
  );
};

export default Location;