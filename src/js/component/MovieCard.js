import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const MovieCard = props => {
	return (
		<div className="text-center mt-5 moviecard-container">
			<Link
				to={{
					pathname: `/moviedetails/${props.movie.imdb_id}`,
					state: props
				}}>
				<div className="card" style={{ width: "20rem" }}>
					<img className="card-img-top" src={props.poster} alt="POSTER COMING UP" />
					<div className="card-body moviecard-div">
						<h3 className="card-title text-warning">{props.movie.title}</h3>
						<h5 className="card-subtile mb-2 text-muted">{props.movie.year}</h5>
						<p className="card-text">{props.boxOffice}</p>
						<p className="card-text">IMDB Rating: {props.imdbRating}</p>
						<p className="card-text">Country: {props.country}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

MovieCard.propTypes = {
	poster: PropTypes.string,
	country: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	boxOffice: PropTypes.string,
	plot: PropTypes.string,
	movie: PropTypes.object,
	imdbRating: PropTypes.string,
	imdb_id: PropTypes.string
};
