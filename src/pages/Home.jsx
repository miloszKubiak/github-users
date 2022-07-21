import React, { useContext } from "react";
import { Navbar, Search, Info, User, Repos, Loader } from "../components";
import { GithubContext } from "../context/context";

const Home = () => {
	const { isLoading } = useContext(GithubContext);

	if (isLoading) {
		return (
			<main>
				<Navbar />
				<Search />
				<Loader />
			</main>
		);
	}

	return (
		<main>
			<Navbar />
			<Search />
			<Info />
			<User />
			<Repos />
		</main>
	);
};

export default Home;
