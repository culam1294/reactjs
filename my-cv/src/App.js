import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <Table/>
    </div>
  );
}

export default App;
