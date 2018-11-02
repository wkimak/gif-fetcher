import React from 'react';
// Error Message used for fetching gif failure, logging in failure, and no results found (from fetching gifs)
const ErrorMessage = ({ message }) => (
  <span> { message } </span>
);

export default ErrorMessage;