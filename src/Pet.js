import React from 'react';

const Pet = ({ name, animal, breed, media, location, id }) => {
  if (media) {
    var hero = media.photos.photo[0].value;
  } else {
    hero = null;
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </a>
  );
};

export default Pet;
