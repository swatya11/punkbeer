import React, { useState, useEffect } from 'react';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Punk Beers</h1>
      <input
        type="text"
        placeholder="Search for a beer..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <div className="beer-card" key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>ABV: {beer.abv}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
