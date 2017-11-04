import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Import components
import ContentHeader from '../components/content-header';

class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.pushToScreen = this.pushToScreen.bind(this);
  }

  pushToScreen(path) {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    return [
      <ContentHeader key="ContentHeader" pageName="Titles" />,
      <div key="AppContentContainer" className="app-content-container">
        <div className="app-content-card" onClick={() => this.pushToScreen('/series')}>
          <img className="app-content-placeholder" src={require("../assets/placeholder.png")} alt='Series' />
          <div className="app-content-text-center">SERIES</div>
          <span>Popular Series</span>
        </div>
        <div className="app-content-card" onClick={() => this.pushToScreen('/movies')}>
          <img className="app-content-placeholder" src={require("../assets/placeholder.png")} alt='Series' />
          <div className="app-content-text-center">MOVIES</div>
          <span>Popular Movies</span>
        </div>
      </div>
    ];
  }
}

export default withRouter(HomeScreen);