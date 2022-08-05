import React from "react";
import "./LoginPage.css";
// import Auth2 from "../components/Auth2";
import { LongButton } from "../components/ButtonComponents";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();
	return (
		<div className="login-form">
			<div className="auth-button">
				<h2>Login</h2>
				<hr></hr>
				{/* <Auth2 /> */}
				<div className="test-token-div">
					<div
						className={"btn rounded-button outline-button-long"}
						onClick={() => navigate("/payment")}
					>
						Try Without Log In
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
