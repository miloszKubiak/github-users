import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";

const Info = () => {
	const data = React.useContext(GithubContext);

	return <div>Info: {data}</div>;
};

export default Info;
