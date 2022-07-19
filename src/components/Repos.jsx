import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Bar3D, Column3D, Doughnut3D, Pie3D } from "./Charts";

const Repos = () => {
	const { repos } = useContext(GithubContext);

	let languages = repos.reduce((total, item) => {
		const { language } = item;
		if (!language) return total;
		if (!total[language]) {
			total[language] = { label: language, value: 1 };
		} else {
			total[language] = {
				...total[language],
				value: total[language].value + 1,
			};
		}

		return total;
	}, {});

	languages = Object.values(languages)
		.sort((a, b) => b.value - a.value)
		.slice(0, 5);

	const chartData = [
		{
			label: "HTML",
			value: "13",
		},
		{
			label: "CSS",
			value: "23",
		},
		{
			label: "Javascript",
			value: "80",
		},
	]; //dummy data

	return (
		<section className="section">
			<Wrapper>
				{/* <ExampleChart data={chartData} /> */}
				<Pie3D data={languages} />
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

	.fusioncharts-container {
		width: 100% !important;
	}

	svg {
		width: 100% !important;
		border-radius: var(--radius) !important;
	}
`;
