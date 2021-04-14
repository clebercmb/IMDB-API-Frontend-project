import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { BoxOffice } from "./BoxOffice";

export const Home = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="jumbotron bg-dark" id="popout">
				<h1 className="display-4 text-warning">Box Office Movies</h1>
				<Link to="/boxoffice">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						View
					</span>
				</Link>
			</div>
			<div className="jumbotron bg-dark">
				<h1 className="display-4 text-warning">Upcoming Movies</h1>
				<Link to="/upcomingmovies">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						View
					</span>
				</Link>
			</div>
			<div className="jumbotron bg-dark">
				<h1 className="display-4 text-warning">Trending Movies</h1>
				<Link to="/trendingmovies">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						View
					</span>
				</Link>
			</div>
			<div className="jumbotron bg-dark">
				<h1 className="display-4 text-warning">Popular Movies</h1>
				<Link to="/popularmovies">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						View
					</span>
				</Link>
			</div>
			<div className="jumbotron bg-dark">
				<h1 className="display-4 text-warning">International Movies</h1>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						View
					</span>
				</Link>
			</div>
		</div>
	);
};

Home.propTypes = {
	match: PropTypes.object
};
