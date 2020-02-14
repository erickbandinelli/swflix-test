import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2'
import Col from 'react-bootstrap/Col';
import { FaPlay } from "react-icons/fa";

import axios from 'axios';

import DetailsStyle from './style';

class DetailsFilm extends React.Component {
	constructor(props, { match }) {
		super(props, { match });

		this.state = {
			datailFilm: [],
			id: window.location.href.match(/\/([^\/]+)\/?$/)[1]
		}

		this.listDatailFilm = this.listDatailFilm.bind(this);
		this.handleVideo = this.handleVideo.bind(this);
	}

	componentDidMount() {
		this.listDatailFilm();
	}

	listDatailFilm() {
		axios.get(`https://swapi.co/api/films/${this.state.id}`)
			.then(({ data }) => {
				console.log(data)
				this.setState({ datailFilm: data })
			})
			.catch((error) => {
				// handle error
				console.log(error);
			})
	}

	handleVideo() {
		Swal.fire({
				html:
					'<iframe width="100%" height="315" src="https://www.youtube.com/embed/FDXmcZ1_D-o?start=14" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
				showConfirmButton: false,
				width: 600
		})
	}

  render() {
    return (
      <DetailsStyle>
				<Container>
  				<Row>
							<div className="bg"></div>
							<div className="info">
								<Col sm={12} md={6} lg={6}>
									<div className="block-text">
										<h3>{this.state.datailFilm.title}</h3>
										<p>{this.state.datailFilm.opening_crawl}</p>
										<span className="genres">Science Fiction</span>
										<span className="prod">Director: <h4><b>{this.state.datailFilm.director}</b></h4></span>
										<span className="prod">Producer: <h4><b>{this.state.datailFilm.producer}</b></h4></span>
										<span className="prod">Release date of: <h4><b>{this.state.datailFilm.release_date}</b></h4></span>
									</div>
								</Col>

								<Col sm={12} md={6} lg={6}>
									<div className="buttonplay" onClick={(e) => this.handleVideo() }>
										<FaPlay />
									</div>
								</Col>
							</div>
					</Row>
				</Container>
			</DetailsStyle>
    );
  }
};

export default DetailsFilm;
