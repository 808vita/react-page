import React, { useState, useEffect, useContext } from "react";
import "./LoginPage.css";
// import Auth2 from "../components/Auth2";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
const LoginPage = () => {
	const navigate = useNavigate();
	const GContext = useContext(GlobalContext);
	const { setAuth, setUserInfo } = GContext;
	const testLogin = () => {
		setAuth(true);
		setUserInfo("Test@Login");
		navigate("/payment");
	};
	return (
		<div className="login-form">
			<div className="auth-button">
				<h2>Login</h2>
				<hr></hr>
				{/* <Auth2 /> */}
				<div className="test-token-div">
					<div
						className={"btn rounded-button outline-button-long"}
						onClick={() => testLogin()}
					>
						Try Without Log In
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
