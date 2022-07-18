import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";

const Followers = () => {
	const { followers } = useContext(GithubContext);

	return (
		<Wrapper>
			<div className="followers">
				{followers.map((follower, index) => {
					const { avatar_url: img, html_url, login } = follower;
					return (
						<article key={index}>
							<img src={img} alt={login} />
							<div>
								<h4>{login}</h4>
								<a href={html_url}>{html_url}</a>
							</div>
						</article>
					);
				})}
			</div>
		</Wrapper>
	);
};

export default Followers;

const Wrapper = styled.article`
	position: relative;
	padding: 1.5rem 2rem;
	background: var(--white);
	border-bottom-left-radius: var(--radius);
	border-bottom-right-radius: var(--radius);
	border-top-right-radius: var(--radius);

	&::before {
		content: "followers";
		position: absolute;
		top: 0;
		left: 0;
		padding: 0.5rem 1rem 0 1rem;
		transform: translateY(-100%);
		background: var(--white);
		color: var(--grey-5);
		text-transform: capitalize;
		font-size: 1rem;
		letter-spacing: var(--spacing);
		border-top-right-radius: var(--radius);
		border-top-left-radius: var(--radius);
	}

	.followers {
		display: grid;
		grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
		gap: 1.2rem 1rem;
		padding: 1rem 2rem;
		height: 260px;
		overflow: scroll;
	}

	article {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		column-gap: 1rem;
		padding: 0.15rem 0.5rem;
		border-radius: var(--radius);
		transition: var(--transition);

		img {
			height: 100%;
			width: 45px;
			object-fit: cover;
			border-radius: 50%;
		}

		h4 {
			margin-bottom: 0;
		}

		a {
			color: var(--grey-5);
		}
	}
`;
