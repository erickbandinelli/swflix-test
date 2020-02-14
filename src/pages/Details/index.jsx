import React from 'react';
import Header from '../../components/Header';
import DetailsFilm from '../../components/DetailsFilm';

class Details extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <DetailsFilm />
      </React.Fragment>
    );
  }
};

export default Details;
