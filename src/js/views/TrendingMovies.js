import React, { useEffect, useState } from "react";

import { MovieCard } from "../component/MovieCard";
import "../styles/home.scss";

export const TrendingMovies = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [movieDetails, setMovieDetails] = useState([]);

	useEffect(() => {
		var moviesInStorage = localStorage.getItem("trendingMovies");
		if (!moviesInStorage) {
			fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-trending-movies&page=1", {
				method: "GET",
				headers: {
					"x-rapidapi-key": "da2aafe225mshd2599115ee599ebp1e0ab8jsn5b0724cf5916",
					"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
				}
			})
				.then(response => response.json())
				.then(data => {
					localStorage.setItem("trendingMovies", JSON.stringify(data.movie_results));
					setPopularMovies(data.movie_results);
				})
				.catch(err => {
					console.error(err);
				});
		} else {
			var parsedMovies = JSON.parse(moviesInStorage);
			setPopularMovies([...parsedMovies]);
		}
	}, []);

	useEffect(
		() => {
			const updatedMovies = [];
			async function fetchData(movie, i) {
				const response = await fetch("https://www.omdbapi.com/?apikey=aab1d9d2&i=" + movie.imdb_id);
				const data = await response.json();
				updatedMovies[i] = data;
			}

			if (movieDetails.length < 1) {
				popularMovies.map((movie, ind) => {
					fetchData(movie, ind).then(() => {
						setMovieDetails([...updatedMovies]);
					});
				});
			}
		},
		[popularMovies]
	);

	return (
		<div className="text-center mt-5">
			<h1>Trending Movies</h1>
			<div className="d-flex flex-wrap justify-content-center">
				{popularMovies.length > 2 && movieDetails.length > 9
					? popularMovies.map((movie, ind) => {
							let details = movieDetails[ind];
							return (
								<MovieCard
									key={ind}
									movie={movie}
									imdbRating={details && details["imdbRating"]}
									poster={details && details["Poster"]}
									country={details && details["Country"]}
								/>
							);
					  })
					: "Loading..."}
			</div>
		</div>
	);
};
