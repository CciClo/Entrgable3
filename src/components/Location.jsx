import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from './Character';
import Page from './Page';
import SearchLocation from './SearchLocation';

const Location = ({ location , setLocation }) => {

  const [ ready , setReady ] = useState(false);
  const [ numberOfPages , setNumberOfPages ] = useState([]);
  const [ selectedPage , setSelectedPage ] = useState(0);

  const changeLocation = (Id) => {
    axios.get(`https://rickandmortyapi.com/api/location/${Id}`)
      .then(res => setLocation(res.data))
  };

  const changePage = (page) => {
    setSelectedPage(page)
  }


  useEffect(() => {

    location && setReady(true);
    
    switch ( ready ) {
      case true:
        if( location.residents.length > 8 ) {
          let pages = [];
          let page = [];
          let counter = 0;

          for(let i = 0; i <= location.residents.length ; i++ ) {
            if ( counter <= 7 && location.residents[i] ) {
              page.push(location.residents[i])
              counter++
            }else if (counter > 7) {
              i--
              counter = 0;
              pages.push(page);
              page = [];
            }else {
              pages.push(page);
            }
          }
          setNumberOfPages(pages)
          
        }else {
          setNumberOfPages(location.residents)
        }
    };

  }, [location]);

  // (numberOfPages.map(num => console.log(num) ))

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

        {numberOfPages.map( (actualPage,index) => (<Page actualPage={ actualPage } index={index} selectedPage={selectedPage} key={actualPage} className={index} />))}

        <div className='selectedPage'>
          { numberOfPages.map( ( actualPage, index ) => (
            <button onClick={ () => changePage(index) } className='btn-selectedPage' >{index+1}</button>
          )  ) }
        </div>
        
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