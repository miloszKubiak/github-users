import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";

const Info = () => {
	const data = React.useContext(GithubContext);
	console.log(data);

	return <div>Info</div>;
};

export default Info;
