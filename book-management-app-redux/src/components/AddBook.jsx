import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";

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
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <input type="text" placeholder="Book Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;