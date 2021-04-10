import React, { useEffect, useState } from "react";

import { MovieCard } from "../component/MovieCard";
import "../../styles/home.scss";

export const Home = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [movieDetails, setMovieDetails] = useState([]);

	async function fetchMovies() {
		console.log("First Effect");

		console.log("Fetching...");
		await fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-recently-added-movies", {
			method: "GET",
			headers: {
				"x-rapidapi-key": "da2aafe225mshd2599115ee599ebp1e0ab8jsn5b0724cf5916",
				"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
			}
		})
			.then(response => response.json())
			.then(data => {
				console.log("data", data);

				setPopularMovies(data.movie_results);
				//setPopularMovies(data.movie_results);
			})
			.catch(err => {
				console.error(err);
			});

		console.log("End First Effect");
	}

	useEffect(() => {
		fetchMovies();
	}, []);

	async function fetchMoviesDetails() {
		const updatedMovies = Array(popularMovies.length);

		popularMovies.forEach(async (movie, i) => {
			await fetch(
				"https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=" + movie.imdb_id,
				{
					method: "GET",
					headers: {
						"x-rapidapi-key": "da2aafe225mshd2599115ee599ebp1e0ab8jsn5b0724cf5916",
						"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
					}
				}
			)
				.then(response => response.json())
				.then(data => {
					updatedMovies[i] = { ...popularMovies[i], ...data, key: i };
				})
				.catch(err => {
					console.error(err);
				});
		});

		setMovieDetails(updatedMovies);

		/*     popularMovies.forEach((movie) => {
      async function fetchData(movie, i) {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=aab1d9d2&i=" + movie.imdb_id
        );
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
    });
 */
		console.log("Movies=", updatedMovies);
	}

	useEffect(
		() => {
			fetchMoviesDetails();
		},
		[popularMovies]
	);

	//useEffect(() => fetchMoviesDetails(), [popularMovies]);

	return (
		<div className="text-center mt-5">
			<h1>Top Popular Movies in the US</h1>
			<div className="d-flex flex-wrap">
				{popularMovies.length > 0
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
