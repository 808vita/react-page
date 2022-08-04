import React from "react";
import Header from "../components/Header";
import PaymentPageLayout from "../layout/PaymentPageLayout";
import ShippingInformationLayout from "../layout/ShippingInformationLayout";

const PaymentPage = () => {
	return (
		<>
			<Header />
			<PaymentPageLayout
				children={{ shippingInformation: <ShippingInformationLayout /> }}
			/>
		</>
	);
};

export default PaymentPage;
