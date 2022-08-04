import React from "react";

const YourCartLayout = () => {
	return (
		<>
			<div className="row mb-3 text-center">Your Cart</div>
			<div className="row mb-3 text-center">
				<div className="row mb-3 text-center">
					<div className="col-sm-12 themed-grid-col">.col-sm-12</div>
					<div className="col-sm-12 themed-grid-col">.col-sm-12</div>
					<div className="col-sm-12 themed-grid-col">.col-sm-12</div>
				</div>
			</div>
			<div className="row mb-3 text-center total-cost d-flex justify-content-center">
				<div className="col-sm-6 total-text">Total Cost</div>
				<div className="col-sm-6 total-price">$price</div>
			</div>
			<div className="row mb-3 text-center">Free shipping text</div>
		</>
	);
};

export default YourCartLayout;
