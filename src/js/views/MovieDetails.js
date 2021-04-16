import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

//import "../styles/demo.scss";

export const MovieDetails = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container MovieDetails-container">
			Movie Details
			<div className="card mb-3 bg-dark" style={{ maxWidth: "80vw" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="" alt="" />
					</div>
					<div className="col-md-8">
						<h2>Title</h2>
						<p> Year</p>
						<p> Director </p>
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
