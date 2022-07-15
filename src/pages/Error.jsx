import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>sorry, page not found :(</h3>
        <Link to="/" className='btn'>
          back home
        </Link>
      </div>
    </Wrapper>
  )
}

export default Error;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  background: var(--primary-10);

  h1 {
    font-size: 10rem;
  }

  h3 {
    margin-bottom: 1.5rem;
  }
`;