import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink, MdClass } from "react-icons/md";

const Card = () => {
	const { githubUser } = useContext(GithubContext);
	const {
		avatar_url,
		html_url,
		name,
		company,
		blog,
		location,
		bio,
		twitter_username,
	} = githubUser;

	return (
		<Wrapper>
			<header>
				<img src={avatar_url} alt={name} />
				<div>
					<h4>{name}</h4>
					<p>@{twitter_username || "john doe"}</p>
				</div>
				<a href={html_url}>follow</a>
			</header>
			<p className="bio">{bio}</p>
			<div className="links">
				<p>
					<MdBusiness /> {company}
				</p>
				<p>
					<MdLocationOn /> {location || "earth"}
				</p>
				<a href={`https://${blog}`}>
					<MdLink /> {blog}
				</a>
			</div>
		</Wrapper>
	);
};

export default Card;

const Wrapper = styled.article`
	position: relative;
	padding: 1.5rem 2rem;
	background: var(--white);
	border-bottom-left-radius: var(--radius);
	border-bottom-right-radius: var(--radius);
	border-top-right-radius: var(--radius);

	&::before {
		content: "user";
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-100%);
		background: var(--white);
		color: var(--grey-5);
		text-transform: capitalize;
		font-size: 1rem;
		letter-spacing: var(--spacing);
		border-top-right-radius: var(--radius);
		border-top-left-radius: var(--radius);
	}

	header {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		column-gap: 1rem;
		margin-bottom: 1rem;

		img {
			width: 75px;
			height: 75px;
			border-radius: 50%;
		}

		h4 {
			margin-bottom: 0.3rem;
		}

		a {
			padding: 0.3rem 0.8rem;
			border-radius: 1rem;
			text-transform: capitalize;
			color: var(--primary-5);
			border: 1px solid var(--primary-5);
			letter-spacing: var(--spacing);
			transition: var(--transition);
			cursor: pointer;

			&:hover {
				background: var(--primary-5);
				color: var(--white);
			}
		}
	}

	.bio {
		color: var(--grey-3);
	}

	.links {
		p,
		a {
			display: flex;
			align-items: center;
			margin-bottom: 0.5rem;
			svg {
				font-size: 1.4rem;
				margin-right: 0.5rem;
			}
		}

		a {
			color: var(--primary-5);
			transition: var(--transition);
			svg {
				color: var(--primary-5);
			}
			&:hover {
				color: var(--primary-3);
			}
		}
	}
`;
