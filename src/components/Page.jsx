import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Character from './Character';

const Page = ({urlsCharacters,location}) => {
  const [ urls , setUrls ] = useState([]);

  useEffect(() => {
    const idn = urlsCharacters;
    setUrls(idn)
  }, [urlsCharacters])

  return (
    <div className='character-container'>
      { urls.length > 1 ?
        urls.map(urlCharacter =>
          <Character urlCharacter={urlCharacter} key={urlCharacter} />
        ): urls.length > 0 ? 
          <Character urlCharacter={urls} key={urls} />
        :
        <></>
      }
    </div>
  );
};

export default Page;