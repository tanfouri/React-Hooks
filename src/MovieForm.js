// MovieForm.js
import React, { useState } from 'react';

const MovieForm = ({ onAddMovie }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(formData);
    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="posterURL"
        placeholder="Poster URL"
        value={formData.posterURL}
        onChange={handleChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={formData.rating}
        onChange={handleChange}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
