import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';

interface SearchBoxProps {
  onClear: () => void;
  onChangeText: (text: string) => void;
}

const SearchBox = ({onClear, onChangeText}: SearchBoxProps) => (
  <SearchBar
    placeholder="Search here"
    style={{width: '98%', marginTop: 8, marginBottom: 4}}
    onClearPress={onClear}
    onChangeText={onChangeText}
  />
);

export default SearchBox;
