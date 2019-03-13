import React, { useState, useEffect, useContext } from 'react';
import pf, { ANIMALS } from 'petfinder-client';
import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  async function requestPets() {
    const res = await petfinder.pet.find({
      location,
      breed,
      animal,
      output: 'full'
    });
    setPets(res.petfinder.pets.pet);
  }

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
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
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
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            id="theme"
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">darkblue</option>
            <option value="chartreuse">chartreuse</option>
            <option value="mediumorchid">mediummorchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
