import React, { useState } from 'react';
import { useEffect } from 'react';
import Page from './Page';

const PageContainer = ({ location }) => {

  const [ ready , setReady ] = useState(false);
  const [ numberOfPages , setNumberOfPages ] = useState([]);
  const [ selectedPage , setSelectedPage ] = useState(0);
  const [ isVisibleButton , setIsVisibleButton ] = useState(false)

  const changePage = (page) => {
    setSelectedPage(page)
  }

  useEffect(() => {
    
    if( location.residents.length > 8 ) {
      let pages = [];
      let page = [];
      let counter = 0
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
          setSelectedPage(0)
          break
        }
      }
      setNumberOfPages(pages)
      setIsVisibleButton(pages)
      
    }else {
      setNumberOfPages(location.residents)
      setIsVisibleButton(false)
    }
    

  }, [location]);

  return (
    <>
      <div className='selectedPage'>
        { isVisibleButton &&
          numberOfPages.map((page,index) => 
            <button onClick={() => changePage(index)} className={`btn-selectedPage ${ index === selectedPage && 'buttomSelect' }`} >{index+1}</button>
          )
        }

      </div>
      

      { location.residents.length > 7 ?
        numberOfPages.map( ( urls ,index) =>
          selectedPage == index &&
            <div>
              <Page urlsCharacters={urls} location={location} key={urls[0]} /> 
            </div>
        ):
        <Page urlsCharacters={numberOfPages} location={location} key={numberOfPages[0]} />
      }
      
      <div className='selectedPage'>
        { isVisibleButton &&
          numberOfPages.map((page,index) => 
            <button onClick={() => changePage(index)} className={`btn-selectedPage ${ index === selectedPage && 'buttomSelect' }`} >{index+1}</button>
          )
        }

      </div>

    </>
  );
};

export default PageContainer;