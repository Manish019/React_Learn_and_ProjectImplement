import React, { useState, useContext } from "react";
import { BookContext } from "../pages/BookContext.jsx";

const AddBook = () => {
  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // 🔹 New state for image

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !category || !description || !imageUrl) return;

    addBook({
      id: Date.now(),
      title,
      author,
      category,
      description,
      imgUrl: imageUrl, // 🔹 Add image URL to the book object
    });

    // 🔹 Clear all fields
    setTitle("");
    setAuthor("");
    setCategory("");
    setDescription("");
    setImageUrl("");

    alert("Book added successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <input type="text" placeholder="Book Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} required /> {/* 🔹 New input */}
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
