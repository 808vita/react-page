import React from "react";

const PaymentPageLayout = ({ children }) => {
	return (
		<>
			<div className="row mb-3 text-center">
				<div className="col-sm-6 themed-grid-col">.col-sm-4</div>
				<div className="col-sm-6 themed-grid-col">.col-sm-4</div>
			</div>
			<div className="row mb-3 text-center">
				<div className="col-lg-5 themed-grid-col">
					{children.shippingInformation}
				</div>
				<div className="col-lg-4 themed-grid-col">.col-lg-4</div>
				<div className="col-lg-3 themed-grid-col">.col-lg-4</div>
			</div>
			<div className="row mb-3 text-center">
				<div className="col-sm-6 themed-grid-col">.col-sm-4</div>
				<div className="col-sm-6 themed-grid-col">.col-sm-4</div>
			</div>
		</>
	);
};

export default PaymentPageLayout;
