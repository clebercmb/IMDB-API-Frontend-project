import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const MovieDetails = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			Welcome To Movie Wizzzzz
			<div className="card mb-3" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4" />
					<div className="col-md-8" />
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
	);
};
