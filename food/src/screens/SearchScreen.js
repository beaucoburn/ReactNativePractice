import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
    const response = await yelp.get('/search', {
      params: {
        term: searchTerm,
        location: 'San Francisco, CA',
        limit: 50,
      }
    });
    setResults(response.data.businesses);
    } catch (err) {
     setErrorMessage('Ooops! Something went wrong');
    }
  }

  useEffect(() => {
    searchApi(term);
  }, []);

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text> We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
