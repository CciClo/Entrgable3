import React from 'react';
import Character from './Character';

const Page = ({ actualPage , index , selectedPage }) => {
  console.log("pagina",index)
  return (
    <>
      { selectedPage == index &&
      <div className='character-container'>
        {actualPage.map( urlCharacter => (<Character urlCharacter={urlCharacter} selectedPage={selectedPage} index={index} key={urlCharacter.name} />) )}
      </div>
      }
    </>
  );
};

export default Page;