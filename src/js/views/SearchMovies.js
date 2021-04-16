import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const SearchMovies = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const location = useLocation();
	const [title, setTitle] = useState("");
	const [year, setYear] = useState("");
	const [result, setResult] = useState({});

	async function fetchData(title, year) {
		const response = await fetch(`https://www.omdbapi.com/?apikey=aab1d9d2&t=${title}`);
		const data = await response.json();
		setResult(data);
	}

	console.log(location);

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
					className="form-control h-auto mr-4"
					placeholder="Search by title..."
					aria-label="Title"
					aria-describedby="basic-addon1"
					onChange={e => setTitle(e.target.value)}
				/>
				<div className="input-group-prepend">
					<span className="input-group-text" id="basic-addon1">
						Year
					</span>
				</div>
				<input
					type="text"
					className="form-control mr-4 h-auto"
					placeholder="Include year for a more precise result..."
					aria-label="Year"
					aria-describedby="basic-addon1"
					onChange={e => setYear(e.target.value)}
				/>
				<input
					type="button"
					className="btn btn-lg btn-secondary text-warning"
					onClick={() => fetchData(title)}
					value="Search"
				/>
			</div>
			{result ? (
				<div className="d-block text-dark">
					<h1>{result.Title}</h1>
					<p>{result.Year}</p>
					<p>{result.Actors}</p>
					<p>{result.Plot}</p>
				</div>
			) : null}
			<Link to="/">
				<span className="btn btn-primary btn-lg mt-5" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SearchMovies.propTypes = {
	match: PropTypes.object
};
