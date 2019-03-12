import React, { useState, useEffect } from 'react';
import pf, { ANIMALS } from 'petfinder-client';
import useDropdown from './useDropdown';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  useEffect(() => {
    setBreed('');
    setBreeds([]);
    petfinder.breed.list({ animal }).then(data => {
      setBreeds(
        Array.isArray(data.petfinder.breeds.breed)
          ? data.petfinder.breeds.breed
          : [data.petfinder.breeds.breed]
      );
    }, console.error);
  }, [animal]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
