import { Routes, Route } from "react-router-dom";
import { Home, Error, Login, PrivateRoute } from "./pages";

function App() {
	return (
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
	);
}

export default App;
