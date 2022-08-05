import React from "react";
import { BigButton } from "../components/ButtonComponents";
import ShippingInformationForm from "../components/ShippingInformationForm";

const ShippingInformationLayout = () => {
	return (
		<>
			<div className="row mb-3 text-start">
				<div className="row text-start ">
					<div className="col-12 gap-3 d-flex flex-wrap justify-content-start">
						<BigButton text={"LOG IN"} type={"green"} />
						<BigButton text={"SIGN UP"} type={"outline"} />
					</div>
				</div>
			</div>
			<div className="row mb-3 text-center">
				<ShippingInformationForm />
			</div>
		</>
	);
};

export default ShippingInformationLayout;
