import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const [topPopularTitles, setTopPopularTitles] = useState([]);

	useEffect(() => {
		fetch("https://imdb8.p.rapidapi.com/title/get-best-picture-winners", {
			method: "GET",
			headers: {
				"x-rapidapi-key": "da2aafe225mshd2599115ee599ebp1e0ab8jsn5b0724cf5916",
				"x-rapidapi-host": "imdb8.p.rapidapi.com"
			}
		})
			.then(response => {
				console.log(response);
				return response.json();
			})
			.then(data => {
				console.log(data);
				setTopPopularTitles(data);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Top</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
