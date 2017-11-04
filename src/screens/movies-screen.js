import React, { Component } from 'react';

// Import components
import ContentHeader from '../components/content-header';

class MoviesScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasError: false,
      series: []
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
      .then(resp => resp.json())
      .then(data => {
        // Extract entries from response data
        var entries = data.entries;
        var series = [];
        for (let i = 0;i < entries.length && series.length < 21; i++) {
          if (entries[i].releaseYear >= 2010 && entries[i].programType === 'movie') series.push(entries[i]);
        }
        // Sort the series
        series.sort((a, b) => {
          return a.title < b.title ? -1 : 1;
        });
        this.setState({
          isLoading: false,
          series: series
        });
      }).catch(err => {
        this.setState({
          isLoading: false,
          hasError: true
        });
      });
  }

  render() {
    let contentHeader = <ContentHeader key="CotentHeader" pageName="Series" />;
    if (this.state.isLoading) {
      return [
        contentHeader,
        <div key="AppContentContainer" className="app-content-container">
          Loading...
        </div>
      ];
    } else if (this.state.hasError) {
      return [
        contentHeader,
        <div key="AppContentContainer" className="app-content-container">
          Oops, something went wrong...
        </div>
      ];
    }
    return [
      contentHeader,
      <div key="AppContentContainer" className="app-content-container">
        <div className="app-content-inner-container">
          { this.state.series && this.state.series.map((serie, iterator) => (
            <div className="app-content-card" key={iterator}>
              <img className="app-content-placeholder" src={serie.images['Poster Art'].url} alt='Series' />
              <br />
              <span className="app-content-card-description">{serie.title}</span>
            </div>
          ))
          }
        </div>
      </div>
    ];
  }
}

export default MoviesScreen;