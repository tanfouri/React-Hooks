//import logo from './logo.svg';
import './App.css';
// App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieForm from './MovieForm'; 
//import po from './action.jpg'

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Movie 1', description: 'Description 1', posterURL:'', rating: 4.5 },
    // Add more initial movies here
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= parseFloat(rating)
    );
    setFilteredMovies(filtered);
  };
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
       {/* ... */}
       <MovieForm onAddMovie={handleAddMovie} /> {/* Render the MovieForm component. */}
      <button onClick={() => addMovie({ title: 'New Movie', description: 'New Description', posterURL: '', rating: 3.0 })}>
        Add Movie
      </button>
    </div>
  );
};

export default App;
