import React from "react";
const paymentMethodLogos = [
	"paypal",
	"visa",
	"mastercard",
	"maestro",
	"discover",
	"ideal",
];
const deliveryMethodLogos = ["inpost", "dpd", "dhl", "fedx"];
const deliveryMethodCost = {
	inpost: "20.00",
	dpd: "12.00",
	dhl: "15.00",
	fedx: "10.00",
};
const PaymentMethodLayout = () => {
	return (
		<>
			<div className="row mb-2 text-start">
				<h6>Payment Method</h6>
			</div>
			<div className="row mb-3 text-center">
				<div className="row mb-3 text-center gap-2 d-flex flex-wrap align-items-center justify-content-evenly">
					{/* <div className="col-sm-4 outline-img border">
						<img src={require("../assests/visa.png")} height={20} />
					</div> */}
					{paymentMethodLogos.map((item) => {
						if (["maestro", "discover", "ideal"].includes(item)) {
							return (
								<div key={item} className="col-sm-3 outline-img border g-1">
									<img
										src={require("../assests/" + item + ".png")}
										height={25}
									/>
								</div>
							);
						} else {
							return (
								<div key={item} className="col-sm-3 outline-img border">
									<img
										src={require("../assests/" + item + ".png")}
										height={15}
									/>
								</div>
							);
						}
					})}
				</div>
			</div>
			<div className="row mb-3 text-start">
				<h6>Delivery Method</h6>
			</div>
			<div className="row mb-3 text-center gap-3 d-flex flex-wrap align-items-center justify-content-evenly">
				{deliveryMethodLogos.map((item) => {
					if (["inpost", "fedx"].includes(item)) {
						return (
							<div
								key={item}
								className="col-sm-5 outline-img border text-center g-1 d-flex flex-wrap align-items-center justify-content-evenly"
							>
								<img src={require("../assests/" + item + ".png")} height={28} />
								<p className="m-0 pt-1 pb-1 d-flex flex-wrap align-items-center justify-content-evenly">
									${deliveryMethodCost[item]}
								</p>
							</div>
						);
					} else {
						return (
							<div
								key={item}
								className="col-sm-5 outline-img border text-center g-1 d-flex flex-wrap align-items-center justify-content-evenly"
							>
								<img src={require("../assests/" + item + ".png")} height={18} />
								<p className="m-0 pt-1 pb-1 d-flex flex-wrap align-items-center justify-content-evenly">
									${deliveryMethodCost[item]}
								</p>
							</div>
						);
					}
				})}
			</div>
		</>
	);
};

export default PaymentMethodLayout;
