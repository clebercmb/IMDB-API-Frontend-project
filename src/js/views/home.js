import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PopularMovies } from "./PopularMovies";
import { InternationalMovies } from "./InternationalMovies";

export const Home = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container-fluid">
			<h1 className="display-3">Welcome to Movie Wizz</h1>

			<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					/>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://variety.com/wp-content/uploads/2021/01/GVK-v010016-R5.jpg"
							className="d-block w-100"
							alt="..."
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5>Godzilla vs Kong</h5>
							<p>2021</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src="https://static.wikia.nocookie.net/disney/images/5/54/The_Art_of_Raya_and_the_Last_Dragon.jpg/revision/latest?cb=20210117171633"
							className="d-block w-100"
							alt="..."
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5>Raya and the Last Dragon</h5>
							<p>2021</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src="https://i.ytimg.com/vi/NmQiJPLYzPI/maxresdefault.jpg"
							className="d-block w-100"
							alt="..."
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5>The Unholy</h5>
							<p>2021</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			<div className="jumbotron bg-dark">
				<h1 className="display-4 text-warning">Box Office Movies</h1>
				<Link to="/boxoffice">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						VIEW MOVIES
					</span>
				</Link>
			</div>
			<div className="jumbotron bg-dark">
				<h1 className="display-4 text-warning">Upcoming Movies</h1>
				<Link to="/upcomingmovies">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						View
					</span>
				</Link>
			</div>
			<div className="jumbotron bg-dark">
				<h1 className="display-4 text-warning">Trending Movies</h1>
				<Link to="/trendingmovies">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						View Movies
					</span>
				</Link>
			</div>
			<div className="jumbotron bg-dark">
				<h1 className="display-4 text-warning">Popular Movies</h1>
				<Link to="/popularmovies">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						View Movies
					</span>
				</Link>
			</div>
			<div className="jumbotron bg-dark">
				<h1 className="display-4 text-warning">International Movies</h1>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						View Movies
					</span>
				</Link>
			</div>
		</div>
	);
};

Home.propTypes = {
	match: PropTypes.object
};
