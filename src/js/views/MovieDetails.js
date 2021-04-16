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
						<p> RunTime </p>
						<p> Countries </p>
					</div>
				</div>
			</div>
			<div className="info" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<h1>Cast</h1>
					<div className="jumbotron mx-auto w-75 bg-dark d-block justify-content-between">
						<h1 className="display-4 text-warning">Trending Movies</h1>
					</div>
				</div>
				<div className="row g-0">
					<h1>Rating</h1>
					<div className="jumbotron mx-auto w-75 bg-dark d-block justify-content-between">
						<h1 className="display-4 text-warning">Trending Movies</h1>
					</div>
				</div>
				<div className="row g-0">
					<h1>Plot</h1>
					<div className="jumbotron mx-auto w-75 bg-dark d-block justify-content-between">
						<h1 className="display-4 text-warning">Trending Movies</h1>
					</div>
				</div>
			</div>
			<div className="row g-0">
				<h1>Writers</h1>
				<div className="jumbotron mx-auto w-75 bg-dark d-block justify-content-between">
					<h1 className="display-4 text-warning">Trending Movies</h1>
				</div>
			</div>
			<div className="row g-0">
				<h1>Production</h1>
				<div className="jumbotron mx-auto w-75 bg-dark d-block justify-content-between">
					<h1 className="display-4 text-warning">Trending Movies</h1>
				</div>
			</div>
		</div>
	);
};
