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

	//check rate
	const checkRequests = () => {
		axios(`${ROOT_URL}/rate_limit`)
			.then(({ data }) => {
				let {
					rate: { remaining },
				} = data;
				setRequests(remaining);
				if (remaining === 0) {
					//throw error
				}
			})
			.catch((error) => console.log(error));
	};

	//error
	useEffect(checkRequests, []);

	return (
		<GithubContext.Provider
			value={{ githubUser, followers, repos, requests }}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubContext, GithubProvider };
