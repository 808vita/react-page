import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Toasts = () => {
	const GContext = useContext(GlobalContext);
	const { Auth, userInfo } = GContext;
	const [toast, setToast] = useState("show");
	const toggler = () => {
		setToast("hide");
	};

	useEffect(() => {
		setTimeout(() => {
			toggler();
		}, 3000);
	}, [Auth]);

	return (
		<div className="position-fixed bottom-0 end-0 p-3">
			{/* style="z-index: 11" */}
			<div
				id="liveToast"
				className={`toast ${toast}`}
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div className="toast-header">
					<img
						src="https://avatars.githubusercontent.com/u/97225946?v=4"
						height={50}
						className="logo-img-cat me-2"
						alt="memecat"
					/>

					<strong className="me-auto">
						{userInfo === "Welcome" ? "Welcome!" : Auth ? `Hellooo!` : "Bye!"}
					</strong>
					<small>Just Now</small>
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div className="toast-body">
					{userInfo === "Welcome"
						? "Login to navigate to payment page!"
						: Auth
						? `${userInfo}`
						: "You logged out!"}
				</div>
			</div>
		</div>
	);
};

export default Toasts;
