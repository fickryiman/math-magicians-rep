import './Quotes.css';
import { useState } from 'react';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const category = 'success';

  const getQuotes = async () => {
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    try {
      setIsLoading(true);
      fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
          'X-Api-Key': 'c5cFywTgJ2lZOt0YMl8FPw==e4WI89mcjpo3tZZW',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setQuote(data[0].quote);
          setAuthor(data[0].author);
        });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error);
    }
  };

  useState(() => {
    getQuotes();
  }, []);

  const handleClick = () => {
    getQuotes();
    console.error(errorMessage);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="quote-container">
      <h2>
        {quote}
        <span className="author">
          &nbsp;(
          { author}
          )
        </span>
      </h2>
      <button
        type="button"
        onClick={handleClick}
        className="quote-button"
      >
        {isLoading ? 'Loading..' : 'New Quote'}
      </button>
    </div>
  );
}

export default Quotes;
