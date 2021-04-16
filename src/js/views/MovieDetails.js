import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
//import "../styles/demo.scss";

export const MovieDetails = props => {
	const { store, actions } = useContext(Context);
	const [movieDetails, setMovieDetails] = useState(null);

	useEffect(() => {
		//var moviesInStorage = localStorage.getItem("movieList");
		console.log("match.params.id", props.match);
		//if (!moviesInStorage) {
		fetch(`https://www.omdbapi.com/?apikey=aab1d9d2&i=${props.match.params.id}`, {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => {
				console.log("data", data);
				setMovieDetails(data);
			})
			.catch(err => {
				console.error(err);
			});
		//} else {
		//	var parsedMovies = JSON.parse(moviesInStorage);
		//	setPopularMovies([...parsedMovies]);
		//}
	}, []);

	return (
		<div className="container MovieDetails-container">
			Movie Details
			<div className="card mb-3 bg-dark" style={{ maxWidth: "80vw" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="" alt="" />
					</div>
					<div className="col-md-8">
						<h2>Title: {movieDetails && movieDetails.Title}</h2>
						<p> Year: {movieDetails && movieDetails.Year}</p>
						<p> Director: {movieDetails && movieDetails.Director} </p>
					</div>
				</div>
			</div>
			<div className="info" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<h1>Cast</h1>
					<div className="col-md-4" />
					<div className="col-md-8" />
				</div>
				<div className="row g-0">
					<h2>Trivia</h2>
					<div className="col-md-4" />
					<div className="col-md-8" />
				</div>
				<div className="row g-0">
					<h3>User Reviews</h3>
					<div className="col-md-4" />
					<div className="col-md-8" />
				</div>
			</div>
		</div>
	);
};

MovieDetails.propTypes = {
	poster: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	boxOffice: PropTypes.string,
	plot: PropTypes.string,
	movie: PropTypes.object,
	imdbRating: PropTypes.string,
	match: PropTypes.object
};
