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

const Wrapper = styled.div`
	position: relative;
	width: 90vw;
	margin: 0 auto;
	max-width: 1170px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	h3 {
		padding: 0 .5rem;
	}

	.form-control {
    background: var(--white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;

    input {
      border-color: transparent;
      outline-color: var(--grey-10);
      letter-spacing: var(--spacing);
      color: var(--grey-3);
      padding: 0.2rem 0.5rem;
    }

    input::placeholder {
      color: var(--grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }

    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.2rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--primary-5);
      color: var(--white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--primary-8);
        color: var(--primary-1);
      }
    }

    svg {
      color: var(--grey-5);
    }

    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.8rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--grey-5);
    font-weight: 400;
  }
`;

