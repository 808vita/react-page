import React, { useEffect, useRef, useContext } from "react";
import jwt_decode from "jwt-decode";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
const Auth2 = () => {
	const GContext = useContext(GlobalContext);
	const { setAuth, setUserInfo } = GContext;
	const navigate = useNavigate();
	const divRef = useRef(null);
	function handleCallbackResponse(response) {
		console.log("Encoded JWT ID token:" + response.credential);
		console.log(response);

		let userObject = jwt_decode(response.credential);
		console.log(userObject);
		if (userObject?.email_verified) {
			const email = userObject?.email;
			setUserInfo(email);
			setAuth(true);
			navigate("/payment");
		}
	}

	useEffect(() => {
		/* global google */
		window.google.accounts.id.initialize({
			client_id:
				"308703956175-30b0tdfpdj9jtefec8p2cct4ut7qs355.apps.googleusercontent.com",
			callback: handleCallbackResponse,
		});

		window.google.accounts.id.renderButton(
			document.getElementById("siginDiv"),
			{
				theme: "outline",
				size: "large",
				width: "300px",
			}
		);
	}, []);

	return <div id="siginDiv" ref={divRef}></div>;
};

export default Auth2;
