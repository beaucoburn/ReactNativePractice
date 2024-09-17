import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
 const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
    const response = await yelp.get('/search', {
      params: {
        term: searchTerm,
        location: 'Guadalajara, Mexico',
        limit: 50,
      }
    });
    setResults(response.data.businesses);
    } catch (err) {
     setErrorMessage('Ooops! Something went wrong');
    }
  }

  useEffect((term) => {
    searchApi(term);
  }, []);

  return [searchApi, results, errorMessage];
};
