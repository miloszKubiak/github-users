import React from "react";
import styled from "styled-components";

const Loader = () => {
	return (
		<Container>
			<Spinner />
		</Container>
	);
};

export default Loader;

const Container = styled.div`
	position: relative;

	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}
`;

const Spinner = styled.div`
	width: 8rem;
	height: 8rem;
	margin: 0 auto;
	margin-top: 5rem;
	border-radius: 50%;
	border: .5rem solid var(--primary-5);
	border-top-color: var(--grey-5);
	animation: spinner 0.6s linear infinite;
`;
