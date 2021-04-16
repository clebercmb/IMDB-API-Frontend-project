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
				<div className="card" style={{ width: "18rem" }}>
					<img className="card-img-top" src={props.poster} alt="Card image cap" />
					<div className="card-body moviecard-div">
						<h5 className="card-title">{props.movie.title}</h5>
						<h6 className="card-subtile mb-2 text-muted">{props.movie.year}</h6>
						<p className="card-text">{props.boxOffice}</p>
						<span href="#" className="card-link">
							IMDB Rating:
							{props.imdbRating}
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

MovieCard.propTypes = {
	poster: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	boxOffice: PropTypes.string,
	plot: PropTypes.string,
	movie: PropTypes.object,
	imdbRating: PropTypes.string,
	imdb_id: PropTypes.string
};
