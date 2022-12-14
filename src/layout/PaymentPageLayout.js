import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LongButton } from "../components/ButtonComponents";
import { GlobalContext } from "../context/GlobalState";

const PaymentPageLayout = ({ children }) => {
	const GContext = useContext(GlobalContext);
	const { Auth, setAuth, setUserInfo } = GContext;
	const navigate = useNavigate();
	const backButton = () => {
		setAuth(false);
		setUserInfo("");
		navigate("/");
	};
	useEffect(() => {
		if (!Auth) {
			navigate("/");
		}
	});

	return (
		<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-center mx-3 border-bottom">
			<div className="justify-content-center justify-content-md-center my-3">
				<div className="row mb-3 text-center">
					<div className="col-sm-6 text-start">
						<h4>Shipping and Payment</h4>
					</div>
					<div className="col-sm-6 d-flex flex-row-reverse">
						<div className="cart-progress text-center d-flex flex-wrap align-items-center justify-content-center">
							<div className="d-flex flex-wrap align-items-center justify-content-center border icon-round">
								<i className="fas fa-cart-arrow-down"></i>
							</div>
							<div>
								<hr align="center" width="80px" />
							</div>
							<div className="d-flex flex-wrap align-items-center justify-content-center border icon-round-truck ">
								<i className="fas fa-truck truck-icon-top"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="row mb-3 text-center">
					<div className="col-lg-6 text-center">
						{children.shippingInformation}
					</div>
					<div className="col-lg-3 text-center d-flex flex-wrap align-items-center justify-content-between">
						{children.paymentMethod}
					</div>
					<div className="col-lg-3 ">{children.yourCart}</div>
				</div>
				<div className="row text-start">
					<div className="col-sm-6 text-center g-1 d-flex flex-wrap align-items-center justify-content-start ">
						<div
							onClick={() => backButton()}
							className="outline-button-long rounded-back  text-center d-flex flex-wrap align-items-center justify-content-start"
						>
							<i className="fas fa-arrow-left h5 me-3 "></i>
							<h5>Back</h5>
						</div>
					</div>
					<div className="col-sm-6 ">
						<div className="row text-end justify-content-center">
							<div className="col-6">
								<LongButton text={"CONTINUE SHOPPING"} type={"outline"} />
							</div>
							<div className="col-6 ">
								<LongButton text={"PROCEED TO PAYMENT"} type={"green"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentPageLayout;
