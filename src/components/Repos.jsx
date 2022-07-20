import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { Bar3D, Column3D, Doughnut2D, Pie3D } from "./Charts";

const Repos = () => {
	const { repos } = useContext(GithubContext);

	const languages = repos.reduce((total, item) => {
		const { language, stargazers_count } = item;
		if (!language) return total;
		if (!total[language]) {
			total[language] = {
				label: language,
				value: 1,
				stars: stargazers_count,
			};
		} else {
			total[language] = {
				...total[language],
				value: total[language].value + 1,
				stars: total[language].stars + stargazers_count,
			};
		}

		return total;
	}, {});

	const mostUsed = Object.values(languages)
		.sort((a, b) => b.value - a.value)
		.slice(0, 5);

	//most stars per language

	const mostPopular = Object.values(languages)
		.sort((a, b) => b.stars - a.stars)
		.map((item) => {
			return { ...item, value: item.stars };
		})
		.slice(0, 5);

	//stars, forks

	let { stars, forks } = repos.reduce(
		(total, item) => {
			const { stargazers_count, name, forks } = item;
			total.stars[stargazers_count] = {
				label: name,
				value: stargazers_count,
			};
			total.forks[forks] = { label: name, value: forks };

			return total;
		},
		{ stars: {}, forks: {} }
	);

	stars = Object.values(stars).slice(-5).reverse();
	forks = Object.values(forks).slice(-5).reverse();

	return (
		<section className="section">
			<Wrapper>
				<Pie3D data={mostUsed} />
				<Column3D data={stars} />
				<Doughnut2D data={mostPopular} />
				<Bar3D data={forks} />
			</Wrapper>
		</section>
	);
};

export default Repos;

const Wrapper = styled.div`
	display: grid;
	justify-items: center;
	gap: 2rem;
	width: 90vw;
	margin: 0 auto;
	max-width: 1170px;

	@media (min-width: 800px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1200px) {
		grid-template-columns: 2fr 3fr;
	}

	div {
		width: 100% !important;
	}

	/* .fusioncharts-container {
		width: 100% !important;
	} */

	svg {
		width: 100% !important;
		border-radius: var(--radius) !important;
	}
`;
