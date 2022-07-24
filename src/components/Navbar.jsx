import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { FaGithubAlt } from "react-icons/fa";

const Navbar = () => {
	const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
		useAuth0();
	const isUser = isAuthenticated && user;

	return (
		<Wrapper>
			<FaGithubAlt style={{ fontSize: "4rem" }} />
			<div className="user-container">
				{isUser && user.picture && (
					<img src={user.picture} alt={user.name} />
				)}
				{isUser && user.name && (
					<h4>
						Welcome,{" "}
						<strong>{user.name.toLocaleUpperCase()}</strong>
					</h4>
				)}
			</div>
			{isUser ? (
				<button
					onClick={() => {
						logout({ returnTo: window.location.origin });
					}}
				>
					logout
				</button>
			) : (
				<button onClick={loginWithRedirect}>login</button>
			)}
		</Wrapper>
	);
};

export default Navbar;

const Wrapper = styled.nav`
	padding: 1rem;
	margin-bottom: 4rem;
	background: var(--grey-8);
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media (max-width: 550px) {
		flex-direction: column;
		gap: .5rem;
	}

	h4 {
		margin-bottom: 0;
		font-weight: 400;
	}

	img {
		width: 35px !important;
		height: 35px;
		border-radius: 50%;
		object-fit: cover;
	}

	button {
		background: transparent;
		border: transparent;
		font-size: 1.2rem;
		text-transform: capitalize;
		color: var(--black);
		font-weight: bold;
		cursor: pointer;
	}

	.user-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
`;
