import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const MovieCard = props => {
	return (
		<div className="text-center mt-5">
			Hey
			<div className="card" style={{ width: "18rem" }}>
				<img className="card-img-top" src={props.poster} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<h6 className="card-subtile mb-2 text-muted">{props.year}</h6>
					<p className="card-text">{props.boxOffice}</p>
					<a href="#" className="card-link">
						{props.plot}
					</a>
				</div>
			</div>
		</div>
	);
};

MovieCard.propTypes = {
	poster: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	boxOffice: PropTypes.string,
	plot: PropTypes.string
};
