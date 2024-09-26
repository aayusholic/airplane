import React, { useEffect, useState } from "react";
import axios from "axios";

const Items = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://fakerestapi.azurewebsites.net/api/v1/Books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={gridContainerStyle}>
      {books.map((item) => {
        return (
          <div style={cardStyle}>
            <h1>{item.title}</h1>
            {/* <p>{item.description}</p>
            <p>Page Count: {item.pageCount}</p> */}
          </div>
        );
      })}
    </div>
  );
};
const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive grid layout
  gap: "16px",
  padding: "16px",
};
const cardStyle = {
  border: "1px solid #ccc",
  padding: "16px",
  margin: "16px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default Items;
