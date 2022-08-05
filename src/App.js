import "./App.css";
import PaymentPage from "./page/PaymentPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
function App() {
	return (
		<div className="container-xxl">
			<Routes>
				<Route exact path="/" element={<LoginPage />} />
				<Route exact path="/payment" element={<PaymentPage />} />
			</Routes>
		</div>
	);
}

export default App;
