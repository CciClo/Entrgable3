import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from './Character';
import SearchLocation from './SearchLocation';

const Location = () => {

  const [ location,setLocation ] = useState({});

  const changeLocation = (Id) => {
    console.log(location)
    axios.get(`https://rickandmortyapi.com/api/location/${Id}`)
      .then(res => setLocation(res.data))
  };

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 125)+1
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocation(res.data))
  }, []);

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

      <div className='character-container' >
        {location.residents?.map( urlCharacter => (<Character urlCharacter={urlCharacter} key={urlCharacter} />) )}
      </div>

    </div>
  );
};

export default Location;