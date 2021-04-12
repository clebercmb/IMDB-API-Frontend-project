import React from "react";

import PropTypes from "prop-types";
import "../../styles/home.scss";

export const MovieCard = props => {
	return (
		<div className="text-center mt-5">
			<div className="card" style={{ width: "18rem" }}>
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.movie.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{props.movie.year}</h6>
					<p className="card-text">Box office movie</p>
					<a href="#" className="card-link">
						See details
					</a>
				</div>
			</div>
		</div>
	);
};

MovieCard.propTypes = {
	movie: PropTypes.object
};