import React, { useEffect, useState } from "react";

import { MovieCard } from "../component/MovieCard";
import "../../styles/home.scss";

export const Home = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [movieDetails, setMovieDetails] = useState([]);
	var updatedMovies = [];

	useEffect(() => {
		fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-boxoffice-movies&page=1", {
			method: "GET",
			headers: {
				"x-rapidapi-key": "da2aafe225mshd2599115ee599ebp1e0ab8jsn5b0724cf5916",
				"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
			}
		})
			.then(response => response.json())
			.then(data => setPopularMovies(data.movie_results))
			.catch(err => {
				console.error(err);
			});
	}, []);

	useEffect(
		() => {
			if (movieDetails.length < 1) {
				popularMovies.map((movie, ind) => {
					fetch("https://www.omdbapi.com/?apikey=aab1d9d2&i=" + movie.imdb_id)
						.then(response => response.json())
						.then(data => setMovieDetails({ ...movieDetails, [movie.imdb_id]: data }))
						.catch(err => {
							console.error(err);
						});
				});
			}
		},
		[popularMovies]
	);

	console.log(updatedMovies);

	return (
		<div className="text-center mt-5">
			<h1>Top Popular Movies in the US</h1>
			<div className="d-flex flex-wrap">
				{popularMovies.length > 2
					? popularMovies.map((movie, ind) => {
							return <MovieCard key={ind} movie={movie} />;
					  })
					: "Loading..."}
			</div>
		</div>
	);
};
