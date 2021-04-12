import React, { useEffect, useState, useMemo } from "react";

import { MovieCard } from "../component/MovieCard";
import "../../styles/home.scss";

export const Home = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [movieDetails, setMovieDetails] = useState([]);

	useEffect(() => {
		fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-boxoffice-movies&page=1", {
			method: "GET",
			headers: {
				"x-rapidapi-key": "da2aafe225mshd2599115ee599ebp1e0ab8jsn5b0724cf5916",
				"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
			}
		})
			.then(response => response.json())
			.then(data => {
				console.log("data", data);
				let movieA = {
					poster: "https://picsum.photos/100/100",
					key: 1,
					title: "moviename",
					year: 2023,
					boxOffice: "$100",
					plot: "moviescription"
				};
				let movieB = {
					poster: "https://picsum.photos/100/100",
					key: 1,
					title: "moviename",
					year: 2023,
					boxOffice: "$100",
					plot: "moviescription"
				};
				setPopularMovies([movieA, movieB]);
				//setPopularMovies(data.movie_results);
			})
			.catch(err => {
				console.error(err);
			});
		let movieA = {
			poster: "https://picsum.photos/100/100",
			key: 1,
			title: "moviename",
			year: 2023,
			boxOffice: "$100",
			plot: "moviescription"
		};
		let movieB = {
			poster: "https://picsum.photos/100/100",
			key: 1,
			title: "moviename",
			year: 2023,
			boxOffice: "$100",
			plot: "moviescription"
		};
		setPopularMovies([movieA, movieB]);
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
			<h1>Top Popular Movies in the US</h1>
			<div className="d-flex flex-wrap">
				{popularMovies.length > 2
					? popularMovies.map((movie, ind) => {
							return (
								<MovieCard
									key={ind}
									poster={movie.poster}
									title={movie.title}
									year={movie.year}
									boxOffice={movie.boxOffice}
								/>
							);
					  })
					: "Loading..."}
			</div>
		</div>
	);
};
