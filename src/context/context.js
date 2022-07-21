import React, { useEffect, useState } from "react";
import mockUser from "./mockData/mockUser";
import mockFollowers from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";
import axios from "axios";

const ROOT_URL = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
	const [githubUser, setGithubUser] = useState(mockUser);
	const [followers, setFollowers] = useState(mockFollowers);
	const [repos, setRepos] = useState(mockRepos);

	// request loading
	const [requests, setRequests] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	//error
	const [error, setError] = useState({ show: false, msg: "" });

	const searchGithubUser = async (user) => {
		toggleError(); //i only invoke this function without params because i set default values below
		setIsLoading(true);
		const response = await axios(`${ROOT_URL}/users/${user}`).catch(
			(error) => console.log(error)
		);

		if (response) {
			setGithubUser(response.data);
			const { login, followers_url } = response.data;
			//repos
			axios(`${ROOT_URL}/users/${login}/repos?per_page=100`).then(
				(response) => setRepos(response.data)
			);
			//followers
			axios(`${followers_url}?per_page=100`).then((response) =>
				setFollowers(response.data)
			);
		} else {
			toggleError(true, "There is no user with that username.");
		}
		checkRequests();
		setIsLoading(false);
	};

	//check rate
	const checkRequests = () => {
		axios(`${ROOT_URL}/rate_limit`)
			.then(({ data }) => {
				let {
					rate: { remaining },
				} = data;
				setRequests(remaining);
				if (remaining === 0) {
					toggleError(
						true,
						"Sorry, you have exceeded your hourly rate limit!"
					);
				}
			})
			.catch((error) => console.log(error));
	};

	const toggleError = (show = false, msg = "") => {
		setError({ show, msg });
	};

	//error
	useEffect(checkRequests, []);

	return (
		<GithubContext.Provider
			value={{
				githubUser,
				followers,
				repos,
				requests,
				error,
				searchGithubUser,
				isLoading,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubContext, GithubProvider };
