import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";
const AddBook = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container1" onClick={() => navigate("/popular")}>
        <h2>Add your book to library</h2>
        <div className="addBook_block">
          <div className="polosa">
            <p>Upload files</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
