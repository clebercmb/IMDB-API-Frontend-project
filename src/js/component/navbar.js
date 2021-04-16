import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.scss";

export const Navbar = () => {
	return (
<<<<<<< HEAD
		<nav className="navbar navbar-light bg-light mb-3" id="funnavbar">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">?</span>
=======
		<nav className="navbar bg-dark navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-warning">Movie Wizzard</span>
>>>>>>> 048d7c691c08ffd8ec077e14d888df899a1535d7
			</Link>
			<div className="ml-auto">
				<Link to="/searchmovies">
					<button className="btn btn-secondary btn-lg text-warning">Search movies</button>
				</Link>
			</div>
		</nav>
	);
};
