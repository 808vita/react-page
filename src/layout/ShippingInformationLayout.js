import React from "react";
import { BigButton } from "../components/ButtonComponents";
import ShippingInformationForm from "../components/ShippingInformationForm";

const ShippingInformationLayout = () => {
	return (
		<>
			<div className="row mb-3 text-start">
				<div className="col-6">
					<BigButton text={"LOG IN"} type={"green"} />
				</div>
				<div className="col-6">
					<BigButton text={"SIGN UP"} type={"outline"} />
				</div>
			</div>
			<div className="row mb-3 text-center">
				<ShippingInformationForm />
			</div>
		</>
	);
};

export default ShippingInformationLayout;
