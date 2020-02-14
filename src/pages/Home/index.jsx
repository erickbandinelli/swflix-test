import React from 'react';
import Header from '../../components/Header';
import ListMovies from '../../components/movies';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ListMovies />
      </React.Fragment>
    );
  }
};

export default Home;
