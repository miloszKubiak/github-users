import React from "react";
import styled from "styled-components";

const PreLoader = () => {
	return (
		<Container>
			<Spinner />
		</Container>
	);
};

export default PreLoader;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}
`;

const Spinner = styled.div`
	width: 16rem;
	height: 16rem;
	margin: 0 auto;
	border-radius: 50%;
	border: 1rem solid var(--primary-5);
	border-top-color: var(--grey-5);
	animation: spinner 0.6s linear infinite;
`;
