import { Routes, Route } from "react-router-dom";
import { Home, Error, Login, PrivateRoute, AuthWrapper } from "./pages";

function App() {
	return (
		<AuthWrapper>
			<Routes>
				<Route
					path="/"
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
				<Route path="login" element={<Login />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</AuthWrapper>
	);
}

export default App;
