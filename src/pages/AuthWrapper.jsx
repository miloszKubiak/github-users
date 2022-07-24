import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { PreLoader } from "../components";

const AuthWrapper = ({ children }) => {
	const { isLoading, error } = useAuth0();

	if (isLoading) {
		return <PreLoader />;
	}

	if (error) {
		return (
			<Wrapper>
				<h1>{error.message}</h1>
			</Wrapper>
		);
	}

	return <>{children}</>;
};

export default AuthWrapper;

const Wrapper = styled.section`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
