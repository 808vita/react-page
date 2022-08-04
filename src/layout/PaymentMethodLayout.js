import React from "react";

const PaymentMethodLayout = () => {
	return (
		<>
			<div className="row mb-3 text-center">Payment Method</div>
			<div className="row mb-3 text-center">
				<div className="row mb-3 text-center">
					<div className="col-sm-4 themed-grid-col">.col-sm-4</div>
					<div className="col-sm-4 themed-grid-col">.col-sm-4</div>
					<div className="col-sm-4 themed-grid-col">.col-sm-4</div>
					<div className="col-sm-4 themed-grid-col">.col-sm-4</div>
					<div className="col-sm-4 themed-grid-col">.col-sm-4</div>
				</div>
			</div>
			<div className="row mb-3 text-center">Delivery Method </div>
			<div className="row mb-3 text-center">
				<div className="col-sm-6 themed-grid-col">.col-sm-6</div>
				<div className="col-sm-6 themed-grid-col">.col-sm-6</div>
				<div className="col-sm-6 themed-grid-col">.col-sm-6</div>
			</div>
		</>
	);
};

export default PaymentMethodLayout;
