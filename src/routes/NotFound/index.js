import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center">
    <h1>Error 404</h1>
    <div>Woops. Looks like this page doesn't exist.</div>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

export default NotFound;