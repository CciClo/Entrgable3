import React from 'react';
import Character from './Character';

const Page = ({ actualPage , index , selectedPage }) => {
  console.log(actualPage)
  return (
    <>
      { selectedPage == index &&
      <div className='character-container'>
        {actualPage.map( urlCharacter => (<Character urlCharacter={urlCharacter} selectedPage={selectedPage} index={index} key={urlCharacter} />) )}
      </div>
      }
    </>
  );
};

export default Page;