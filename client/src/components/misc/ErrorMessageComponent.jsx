import React from 'react';
// Error Message used for fetching gif failure, logging in failure, and no results found (from fetching gifs)
const ErrorMessage = ({ message }) => (
  <p className='error_component'> { message } </p>
);

export default ErrorMessage;