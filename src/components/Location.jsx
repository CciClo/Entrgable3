import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from './Character';
import SearchLocation from './SearchLocation';

const Location = ({location,setLocation}) => {



  const changeLocation = (Id) => {
    console.log(location)
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

      <main className='character-container' >
        {location.residents?.map( urlCharacter => (<Character urlCharacter={urlCharacter} key={urlCharacter} />) )}
      </main>

      <footer className='footer'>

        <h2> Developers </h2>
        <h4>Oscar Tandioy  &  Jesús Escalona</h4>

        <a href="https://github.com/CciClo/Entrgable3" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        
      </footer>
    </div>
  );
};

export default Location;