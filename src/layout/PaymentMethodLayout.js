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
const PaymentMethodLayout = () => {
	return (
		<>
			<div className="row mb-2 text-start">
				<h6>Payment Method</h6>
			</div>
			<div className="row mb-3 text-center">
				<div className="row mb-3 text-center gap-1">
					{/* <div className="col-sm-4 outline-img border">
						<img src={require("../assests/visa.png")} height={20} />
					</div> */}
					{paymentMethodLogos.map((item) => {
						if (["maestro", "discover", "ideal"].includes(item)) {
							return (
								<div key={item} className="col-sm-3 outline-img border g-3">
									<img
										src={require("../assests/" + item + ".png")}
										height={30}
									/>
								</div>
							);
						} else {
							return (
								<div key={item} className="col-sm-3 outline-img border">
									<img
										src={require("../assests/" + item + ".png")}
										height={18}
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
			<div className="row mb-3 text-center  gap-1">
				{deliveryMethodLogos.map((item) => {
					return (
						<div key={item} className="col-sm-3 outline-img border g-3">
							<img src={require("../assests/" + item + ".png")} height={25} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default PaymentMethodLayout;
