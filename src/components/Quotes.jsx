import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/quotes.css";
import Heading from "./Heading";

const Quotes = () => {
  const [quote, setQuote] = useState({ content: "", author: "" });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://api.quotable.io/random");
        const { content, author } = response.data;
        setQuote({ content, author });
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();

    // Fetch a new quote every 10 seconds
    const interval = setInterval(fetchQuote, 15000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <Heading title="quotes" />
      <p className="quote-text">{quote.content}</p>
      <p className="quote-author">{quote.author}</p>
    </div>
  );
};

export default Quotes;
