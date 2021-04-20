import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
//import "../styles/demo.scss";

export const MovieDetails = props => {
	const { store, actions } = useContext(Context);
	const [movieDetails, setMovieDetails] = useState(null);

	useEffect(() => {
		console.log("match.params.id", props.match);

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
	}, []);

	return (
		<div className="container-fluid MovieDetails-container">
			<h1 className="py-5 text-center">Movie Details</h1>
			<div className="card mb-3 mx-auto bg-dark" style={{ width: "80vw" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={props.location.state.poster} alt="" />
					</div>
					<div className="col-md-8 p-3">
						<h2>{props.location.state.movie.title}</h2>
						<p>{props.location.state.movie.year}</p>
						<p> Director: {movieDetails && movieDetails.Director} </p>
						<p> IMDB Rating: {props.location.state.imdbRating}</p>
						<p> RunTime: {movieDetails && movieDetails.Runtime} </p>
						<p> Countries: {movieDetails && movieDetails.Country}</p>
						<p className="mt-5">
							<Link
								to={{
									pathname: "/similarmovies",
									state: {
										details: props.location.state.movie
									}
								}}>
								<span className="btn btn-lg btn-outline-warning">Similar Movies</span>
							</Link>
						</p>
					</div>
				</div>
			</div>
			<div className="info mx-auto" style={{ width: "80vw" }}>
				<div className="row g-0 d-block">
					<h1 className="ml-3">Cast</h1>
					<div
						className="jumbotron mx-auto bg-dark d-block justify-content-between"
						style={{ width: "80vw" }}>
						<p className=" text-warning">{movieDetails && movieDetails.Actors}</p>
					</div>
				</div>
				<div className="row g-0">
					<h1 className="ml-3">Rating</h1>
					<div
						className="jumbotron mx-auto  bg-dark d-block justify-content-between"
						style={{ width: "80vw" }}>
						<p className=" text-warning">{movieDetails && movieDetails.imdbRating}</p>
					</div>
				</div>
				<div className="row g-0">
					<h1 className="ml-3">Plot</h1>
					<div
						className="jumbotron mx-auto  bg-dark d-block justify-content-between"
						style={{ width: "80vw" }}>
						<p className=" text-warning">{movieDetails && movieDetails.Plot}</p>
					</div>
				</div>
				<div className="row g-0">
					<h1 className="ml-3">Writers</h1>
					<div
						className="jumbotron mx-auto  bg-dark d-block justify-content-between"
						style={{ width: "80vw" }}>
						<p className=" text-warning">{movieDetails && movieDetails.Writer}</p>
					</div>
				</div>
				<div className="row g-0">
					<h1 className="ml-3">Production</h1>
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
