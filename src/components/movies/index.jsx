import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import MoviesStyle from './style';

class ListMovies extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			listMovies: []
		}

		this.listMovies = this.listMovies.bind(this);
	}

	componentDidMount() {
		this.listMovies();
	}

	listMovies() {
		axios.get('https://swapi.co/api/films/')
				.then(({ data }) => {
						this.setState({ listMovies: data.results })
				})
				.catch((error) => {
						// handle error
						console.log(error);
				})
	}

  render() {
		const newListMovies = this.state.listMovies.sort(function (a, b) {
				var nameA = a.episode_id, nameB = b.episode_id
				if (nameA < nameB) 
						return -1
				if (nameA > nameB)
						return 1
				return 0 
		});

    return (
      <MoviesStyle>
				<Container>
  				<Row>
						<ul>
							{
								newListMovies.sort((a, b) => a.episode_id < b.episode_id).map((item, key) => {
									return (
										<Col sm={12} md={3} lg={3} key={item.episode_id}>
											<li>
												<a href={ `/details/${item.url.match(/\/([^\/]+)\/?$/)[1]}`}>
													<div className="image"></div>
													<span>{item.title}</span>
												</a>
											</li>
										</Col>
									)
								})
							}
						</ul>
					</Row>
				</Container>
			</MoviesStyle>
    );
  }
};

export default ListMovies;
