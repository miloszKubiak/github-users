import React, { useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const Search = () => {
	const [user, setUser] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user) {
			//more logic soon

			setUser("");
		}
	};

	return (
		<section className="section">
			<Wrapper>
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<MdSearch />
						<input
							type="text"
							placeholder="enter github user"
							value={user}
							onChange={(e) => setUser(e.target.value)}
						/>
						<button type="submit">search</button>
					</div>
				</form>
				<h3>requests: 60/60</h3>
			</Wrapper>
		</section>
	);
};

export default Search;

const Wrapper = styled.div``;
