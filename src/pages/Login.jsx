import React from 'react'
import styled from 'styled-components'
import loginImage from "../assets/login-img.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
		<Wrapper>
			<div className="container">
				<img src={loginImage} alt="github user" />
				<h1>github users</h1>
				<button className="btn" onClick={loginWithRedirect}>
					login / sign up
				</button>
			</div>
		</Wrapper>
  );
}

export default Login

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .container {
    width: 90vw;
    max-width: 700px;
    text-align: center;
  }

  img, h1 {
    margin-bottom: 1.5rem;
  }
`;