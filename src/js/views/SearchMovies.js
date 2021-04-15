import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SearchMovies = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4 text-dark">Search movies</h1>

			<hr className="my-4" />
			<div className="input-group mb-3">
				<div className="input-group-prepend ml-4">
					<span className="input-group-text" id="basic-addon1">
						Title
					</span>
				</div>
				<input
					type="text"
					className="form-control mr-4"
					placeholder="Search by title..."
					aria-label="Title"
					aria-describedby="basic-addon1"
				/>
				<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1">
						Year
					</span>
				</div>
				<input
					type="text"
					className="form-control mr-4"
					placeholder="Include year for more precise results"
					aria-label="Year"
					aria-describedby="basic-addon1"
				/>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SearchMovies.propTypes = {
	match: PropTypes.object
};
