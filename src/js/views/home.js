import React, { useEffect, useState, useMemo } from "react";

import { MovieCard } from "../component/MovieCard";
import "../../styles/home.scss";

export const Home = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [movieDetails, setMovieDetails] = useState([]);

	const apikey = "6de49d8b";

	async function fetchMovies() {
		console.log("fetchMovies...");

		let newPopularMovies = [];

		await fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-nowplaying-movies&page=1", {
			method: "GET",
			headers: {
				"x-rapidapi-key": "da2aafe225mshd2599115ee599ebp1e0ab8jsn5b0724cf5916",
				"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
			}
		})
			.then(response => response.json())
			.then(data => {
				setPopularMovies(data.movie_results);
				console.log("popularMovies=", popularMovies);
			})
			.catch(err => {
				console.error(err);
			});

		console.log("End First Effect, popularMovies=", popularMovies);
	}

	useEffect(() => {
		fetchMovies();
	}, []);

	async function fetchMoviesDetails() {
		console.log("fetchMoviesDetails...");

		let newMovieDetails = [];

		for (let movie of popularMovies) {
			let movieDetail = {};
			await fetch(
				/* 	`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${movie.imdb_id}`, */
				`http://www.omdbapi.com/?t=${movie.title}&plot=full&apikey=${apikey}`,
				{
					method: "GET"
					/* 		headers: {
						"x-rapidapi-key": "da2aafe225mshd2599115ee599ebp1e0ab8jsn5b0724cf5916",
						"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
					} */
				}
			)
				.then(async response => await response.json())
				.then(data => {
					newMovieDetails = [...newMovieDetails, data];
				})
				.catch(err => {
					console.error(err);
				});
		}

		console.log("###newMovieDetails=", newMovieDetails);
		setMovieDetails(newMovieDetails);
	}

	useEffect(
		() => {
			fetchMoviesDetails();
		},
		[popularMovies]
	);

	//useEffect(() => fetchMoviesDetails(), [popularMovies]);

	console.log(">>*movieDetails==>", movieDetails[0]);
	console.log(">>movieDetails.length==>", movieDetails.length);
	console.log(">>popularMovies==>", popularMovies);

	return (
		<div className="text-center mt-5">
			<h1>Top Popular Movies in the US</h1>

			<div className="d-flex flex-wrap">
				{movieDetails.length == 0 && <p>...loading</p>}
				{movieDetails.length > 0 && <p>...There are {movieDetails.length} movies!</p>}
				{movieDetails.length > 0 &&
					movieDetails.map((movie, i) => <MovieCard key={i} title={movie.title} poster={movie.Poster} />)}
			</div>
		</div>
	);
};
