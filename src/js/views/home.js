import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Carousel from "react-bootstrap/Carousel";

export const Home = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container-fluid">
			<h1 className="display-3 text-center">Welcome to Movie Wizzard</h1>
			<Carousel>
				<Carousel.Item interval={1500}>
					<img
						className="carouselImg d-block"
						src="https://variety.com/wp-content/uploads/2021/01/GVK-v010016-R5.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h2>Godzilla vs Kong</h2>
						<p>2021</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img
						className="carouselImg d-block"
						src="https://i.ytimg.com/vi/9BPMTr-NS9s/maxresdefault.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Raya and The Last Dragon</h3>
						<p>2021</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img
						className="carouselImg d-block"
						src="https://i.ytimg.com/vi/NmQiJPLYzPI/maxresdefault.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>The Unholy</h3>
						<p>2021</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="mb-5"> </div>

			<div className="jumbotron mx-auto w-75 bg-dark d-flex justify-content-between">
				<h1 className="display-4 text-warning">Box Office Movies</h1>
				<Link to="/boxoffice">
					<span className="btn btn-primary btn-lg px-5" href="#" role="button">
						VIEW
					</span>
				</Link>
			</div>
			<div className="jumbotron mx-auto w-75 bg-dark d-flex justify-content-between">
				<h1 className="display-4 text-warning">Upcoming Movies</h1>
				<Link to="/upcomingmovies">
					<span className="btn btn-primary btn-lg px-5" href="#" role="button">
						VIEW
					</span>
				</Link>
			</div>
			<div className="jumbotron mx-auto w-75 bg-dark d-flex justify-content-between">
				<h1 className="display-4 text-warning">Trending Movies</h1>
				<Link to="/trendingmovies">
					<span className="btn btn-primary btn-lg px-5" href="#" role="button">
						VIEW
					</span>
				</Link>
			</div>
			<div className="jumbotron mx-auto w-75 bg-dark d-flex justify-content-between">
				<h1 className="display-4 text-warning">Popular Movies</h1>
				<Link to="/popularmovies">
					<span className="btn btn-primary btn-lg px-5" href="#" role="button">
						VIEW
					</span>
				</Link>
			</div>
			<div className="jumbotron mx-auto w-75 bg-dark d-flex justify-content-between">
				<h1 className="display-4 text-warning">International Movies</h1>
				<Link to="/internationalmovies">
					<span className="btn btn-primary btn-lg px-5" href="#" role="button">
						VIEW
					</span>
				</Link>
			</div>
		</div>
	);
};

Home.propTypes = {
	match: PropTypes.object
};
