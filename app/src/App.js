import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import { getAPI } from './actions/actions'

function App(props) {

  const fetchAPI = e => {
    e.preventDefault();
    props.getAPI();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>COVID-19: New Deaths (by Country)</h2>
        {props.isFetching ? (<h4>Fetching data...</h4>) : (<button onClick={fetchAPI}>Get data</button>)}
      <div>
        {props.data.map(country => (
          <p>{country["Country"]}, New deaths: {country["NewDeaths"]}</p>
        ))}
      </div>
      </header>
      {console.log(props.data)}
    </div>
  );
}

 const mapStateToProps = state => {
   return state;
 }

export default connect(mapStateToProps, {getAPI})(App);
