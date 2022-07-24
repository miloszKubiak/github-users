import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { GoRepo, GoGist } from "react-icons/go";

const Info = () => {
	const { githubUser } = React.useContext(GithubContext);
	const { public_repos, followers, following, public_gists } = githubUser;

	const items = [
		{
			id: 1,
			icon: <GoRepo className="icon" />,
			label: "repos",
			value: public_repos,
			color: "pink",
		},
		{
			id: 2,
			icon: <FiUsers className="icon" />,
			label: "followers",
			value: followers,
			color: "green",
		},
		{
			id: 3,
			icon: <FiUserPlus className="icon" />,
			label: "following",
			value: following,
			color: "purple",
		},
		{
			id: 4,
			icon: <GoGist className="icon" />,
			label: "gists",
			value: public_gists,
			color: "yellow",
		},
	];

	return <section className="section">
		<Wrapper className="section-center">
			{items.map(item => {
				return <Item key={item.id} {...item} />
			})}
		</Wrapper>
	</section>;
};

//helper component for the better writing and reading
const Item = ({ icon, label, value, color }) => {
	return (
		<article className="item">
			<span className={color}>{icon}</span>
			<div>
				<h3>{value}</h3>
				<p>{label}</p>
			</div>
		</article>
	)
}

export default Info;

const Wrapper = styled.section`
	display: grid;
	width: 90vw;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1rem 2rem;

	@media (min-width: 640px) {
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	}

	.item {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 3rem;
		align-items: center;
		padding: 1rem 2rem;
		background: var(--grey-10);
		border-radius: var(--radius);

		span {
			display: grid;
			place-items: center;
			width: 3rem;
			height: 3rem;
			border-radius: var(--radius);
		}

		.icon {
			font-size: 1.6rem;
		}

		h3 {
			margin-bottom: 0;
			letter-spacing: 0;
		}

		p {
			text-transform: capitalize;
			margin-bottom: 0;
		}

		.pink {
			background: #ffcce6;
			color: #da3989;
		}

		.green {
			background: var(--primary-10);
			color: var(--primary-5);
		}

		.purple {
			background: #d2d2fa;
			color: #5047ff;
		}
		
		.yellow {
			background: #fff9df;
			color: #f8b415;
		}
	}
`;
