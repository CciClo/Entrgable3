import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Character = ({urlCharacter}) => {

  const [ character,setCharacter ] = useState({});

  useEffect(() => {
    axios.get(urlCharacter)
      .then(obtainedCharacter => setCharacter(obtainedCharacter.data))
  }, []);

  return (
    <div className='character'>

      <img src={character.image} alt="Character image" />

      <div className='features' >
        <h3>
          {character.name}
        </h3>
      </div>

      <div className='features' >

        <div className='status' >
          <div className={ `${ character.status === "Alive"? 'green' : character.status==='Dead'? "red" : "gray" } circle` } ></div>
          <h4>
            {character.status}
          </h4>
        </div>

        <p>
          Specie:
        </p>
        <h4>
          {character.species}
        </h4>

        <p>
          Origin:
        </p>
        <h4>
          {character.origin?.name}
        </h4>

        <p>
          Type:
        </p>
        <h4>
          {character.type}
        </h4>

        <p>
          Number of episodes:
        </p>
        <h4>
          {character.episode?.length}
        </h4>

      </div>

    </div>
  );
};

export default Character;