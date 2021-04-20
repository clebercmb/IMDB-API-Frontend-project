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
			<h1 className="pb-4">Movie Details</h1>
			<div className="card mb-3 bg-dark" style={{ width: "80vw" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={props.location.state.poster} alt="" />
					</div>
					<div className="col-md-8">
						<h2>{props.location.state.movie.title}</h2>
						<p>{props.location.state.movie.year}</p>
						<p> Director: {movieDetails && movieDetails.Director} </p>
						<p> IMDB Rating: {props.location.state.imdbRating}</p>
						<p> RunTime: {movieDetails && movieDetails.Runtime} </p>
						<p> Countries: {movieDetails && movieDetails.Country}</p>
					</div>
				</div>
			</div>
			<div className="info" style={{ width: "80vw" }}>
				<div className="row g-0 d-block">
					<h1>Cast</h1>
					<div
						className="jumbotron mx-auto bg-dark d-block justify-content-between"
						style={{ width: "80vw" }}>
						<p className=" text-warning">{movieDetails && movieDetails.Actors}</p>
					</div>
				</div>
				<div className="row g-0">
					<h1>Rating</h1>
					<div
						className="jumbotron mx-auto  bg-dark d-block justify-content-between"
						style={{ width: "80vw" }}>
						<p className=" text-warning">{movieDetails && movieDetails.imdbRating}</p>
					</div>
				</div>
				<div className="row g-0">
					<h1>Plot</h1>
					<div
						className="jumbotron mx-auto  bg-dark d-block justify-content-between"
						style={{ width: "80vw" }}>
						<p className=" text-warning">{movieDetails && movieDetails.Plot}</p>
					</div>
				</div>
				<div className="row g-0">
					<h1>Writers</h1>
					<div
						className="jumbotron mx-auto  bg-dark d-block justify-content-between"
						style={{ width: "80vw" }}>
						<p className=" text-warning">{movieDetails && movieDetails.Writer}</p>
					</div>
				</div>
				<div className="row g-0">
					<h1>Production</h1>
					<div
						className="jumbotron mx-auto  bg-dark d-block justify-content-between"
						style={{ width: "80vw" }}>
						<p className=" text-warning">{movieDetails && movieDetails.Production}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

MovieDetails.propTypes = {
	location: PropTypes.object,
	poster: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	boxOffice: PropTypes.string,
	plot: PropTypes.string,
	movie: PropTypes.object,
	imdbRating: PropTypes.string,
	match: PropTypes.object
};
