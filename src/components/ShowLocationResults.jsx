import React, { useState } from 'react';
import { useEffect } from 'react';

const ShowLocationResults = ({ location,searchLocation,changeLocation,setSearchLocation }) => {

  const [ locationOp , setLocationOp ] = useState([]);

  useEffect(() => {
    let idb = [];

    location.map(( location2 ) => {
      if(location2.name.toLowerCase().includes(searchLocation.toLowerCase())){
        idb.push(location2)
        // console.log(location2)
      }
    });

    setLocationOp(idb)

    // if(location.name.toLowerCase().includes(searchLocation.toLowerCase())){
    //   setIsNumber(true)
    // }else{
    //   setIsNumber(false)
    // }
  }, [searchLocation])

  return (
    <>

      { locationOp &&
        locationOp.map( locationUp => (
            <h2 onClick={ ()=> ( changeLocation(locationUp.id) , setSearchLocation("") ) } className='bnt-change' key={locationUp.name} >{locationUp.name},  People: {locationUp.residents?.length} </h2>
          ))

      }

      {/* { isNumber && 
        <h2 onClick={ ()=> ( changeLocation(locationOp.id) , setSearchLocation("") ) } className='bnt-change' >{locationOp.name}</h2>
      } */}
    </>
  );
};

export default ShowLocationResults;