import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ShowLocationResults from './ShowLocationResults';

const SearchLocation = ({changeLocation}) => {

  const [ searchLocation,setSearchLocation ] =useState('');
  const [ locations,setLocations ] = useState({});

  useEffect(() => {
    let ind = [];

    axios.get(`https://rickandmortyapi.com/api/location?page=1`)
      .then(location => ind.push( location.data.results ))
    
    axios.get(`https://rickandmortyapi.com/api/location?page=2`)
      .then(location => ind.push( location.data.results ))

    axios.get(`https://rickandmortyapi.com/api/location?page=3`)
      .then(location => ind.push( location.data.results ))
    
    axios.get(`https://rickandmortyapi.com/api/location?page=4`)
      .then(location => ind.push( location.data.results ))

    axios.get(`https://rickandmortyapi.com/api/location?page=5`)
      .then(location => ind.push( location.data.results ))

    axios.get(`https://rickandmortyapi.com/api/location?page=6`)
      .then(location => ind.push( location.data.results ))

    axios.get(`https://rickandmortyapi.com/api/location?page=7`)
      .then(location => ind.push( location.data.results ))
    
    setLocations(ind)

  }, []);

  return (
    <div className='background-search'>
      
      <div className='container-show-location'>

        <input placeholder='Find location by Name' onChange={ location => setSearchLocation(location.target.value) } type="text" value={searchLocation} />

        <div className='show-location'>
          { searchLocation && 
            locations.map( location => (
              < ShowLocationResults location={location} searchLocation={searchLocation} changeLocation={changeLocation} setSearchLocation={setSearchLocation} key={location[0].name} /> 
            ))
          }
        </div>

      </div>

    </div>
  );
};

export default SearchLocation;