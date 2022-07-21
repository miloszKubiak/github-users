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
	const [loading, setLoading] = useState(false);

	//error
	const [error, setError] = useState({ show: false, msg: "" });

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
			value={{ githubUser, followers, repos, requests, error }}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubContext, GithubProvider };
