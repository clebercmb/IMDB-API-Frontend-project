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
		<div>
			{movieDetails && (
				<div className="container MovieDetails-container">
					{movieDetails.Title}
					<div className="card mb-3" style={{ maxWidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4" />
							<div className="col-md-8" />
						</div>
					</div>
					<div className="info" style={{ maxWidth: "540px" }}>
						<div className="row g-0">
							<h1>Cast</h1>
							<label className="col-md-12">{movieDetails.Actors}</label>
						</div>
						<div className="row g-0">
							<h2>Plot</h2>
							<label className="col-md-12">{movieDetails.Plot}</label>
						</div>
						<div className="row g-0">
							<h3>IMBD Rating</h3>
							<label className="col-md-12">{movieDetails.imdbRating}</label>
						</div>
						<div className="row g-0">
							<h4>IMDbPro</h4>
							<div className="col-md-4" />
							<div className="col-md-8" />
						</div>
						<div className="row g-0">
							<h5>More!!!</h5>
							<div className="col-md-4" />
							<div className="col-md-8" />
						</div>
					</div>
				</div>
			)}
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
