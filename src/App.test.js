import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  BrowserRouter as Router
} from 'react-router-dom';

// Import components
import Header from './components/header';
import ContentHeader from './components/content-header';
import Footer from './components/footer';

// Import screens
import App from './App';
import SeriesScreen from './screens/series-screen';

configure({ adapter: new Adapter() });

it('renders the header and compares with snapshots without crashing', () => {
  const header = renderer.create(<Header />);
  let tree = header.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the content header and compares with snapshots without crashing', () => {
  const contentHeader = renderer.create(<ContentHeader />);
  let tree = contentHeader.toJSON();
  expect(tree).toMatchSnapshot();
});

it('asserts the content of the content header', () => {
  const contentHeader = shallow(<ContentHeader pageName="Series" />);
  expect(contentHeader.find('.app-content-text').text()).toEqual('Popular Series');
});

it('renders the footer and compares with snapshots without crashing', () => {
  const footer = renderer.create(<Footer />);
  let tree = footer.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the home screen without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <App />
    </Router>
    , div);
});

it('asserts the number of data retrieved from the server', async () => {
  await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
          .then(resp => resp.json())
          .then(data => {
            expect(data.entries.length).toEqual(100);
          });
});