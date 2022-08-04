import React from "react";
import Header from "../components/Header";
import PaymentMethodLayout from "../layout/PaymentMethodLayout";
import PaymentPageLayout from "../layout/PaymentPageLayout";
import ShippingInformationLayout from "../layout/ShippingInformationLayout";

const PaymentPage = () => {
	return (
		<>
			<Header />
			<PaymentPageLayout
				children={{
					shippingInformation: <ShippingInformationLayout />,
					paymentMethod: <PaymentMethodLayout />,
				}}
			/>
		</>
	);
};

export default PaymentPage;
