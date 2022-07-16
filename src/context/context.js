import React, { useEffect, useState } from "react";

const ROOT_URL = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
	return (
		<GithubContext.Provider value="klops">
			{children}
		</GithubContext.Provider>
	);
};

export { GithubContext, GithubProvider };
