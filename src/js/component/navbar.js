import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-warning">Movie Wizzard</span>
			</Link>
			<div className="ml-auto">
				<Link to="/searchmovies">
					<button className="btn btn-secondary btn-lg text-warning">Search movies</button>
				</Link>
			</div>
		</nav>
	);
};
