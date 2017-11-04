import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom'
import './App.css';

// Import components
import Header from './components/header';
import Footer from './components/footer';

// Import screens
import HomeScreen from './screens/home-screen';
import SeriesScreen from './screens/series-screen';
import MoviesScreen from './screens/movies-screen';

class App extends Component {
  render() {
    return [
        <Header key="Header" />,
        <Route key="HomeScreen" exact path="/" component={HomeScreen} />,
        <Route key="SeriesScreen" path="/series" component={SeriesScreen} />,
        <Route key="MoviesScreen" path="/movies" component={MoviesScreen} />,
        <Footer key="Footer" />
    ];
  }
}

export default App;
