import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";
import './addbook.css'



const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !category || !description || !imageUrl) return;

    dispatch(
      addBook({
        id: Date.now(),
        title,
        author,
        category,
        description,
        imgUrl: imageUrl,
      })
    );

    setTitle("");
    setAuthor("");
    setCategory("");
    setDescription("");
    setImageUrl("");
    alert("Book added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
  <h2 className="form-title">Add a New Book</h2>
  <input
    type="text"
    className="form-input"
    placeholder="Book Title"
    value={title}
    onChange={e => setTitle(e.target.value)}
    required
  />
  <input
    type="text"
    className="form-input"
    placeholder="Author"
    value={author}
    onChange={e => setAuthor(e.target.value)}
    required
  />
  <input
    type="text"
    className="form-input"
    placeholder="Category"
    value={category}
    onChange={e => setCategory(e.target.value)}
    required
  />
  <textarea
    className="form-textarea"
    placeholder="Description"
    value={description}
    onChange={e => setDescription(e.target.value)}
    required
  />
  <input
    type="text"
    className="form-input"
    placeholder="Image URL"
    value={imageUrl}
    onChange={e => setImageUrl(e.target.value)}
    required
  />
  <button type="submit" className="submit-btn">Add Book</button>
</form>

  );
};

export default AddBook;