import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Followers from "./Followers";

const User = () => {
	return <section className="section">
		<Wrapper>
			<Card></Card>
			<Followers></Followers>
		</Wrapper>
	</section>;
};

export default User;

const Wrapper = styled.section`
	/* display: grid;
	gap: 3rem 2rem; */
	display: flex;
	gap: 3rem 2rem;
	padding-top: 2rem;
	margin: 0 auto;
	max-width: 1170px;
	width: 90vw;

	@media (max-width: 992px) {
		flex-direction: column;
	}
`;
