import React from "react";
import Header from "../components/Header";
import PaymentMethodLayout from "../layout/PaymentMethodLayout";
import PaymentPageLayout from "../layout/PaymentPageLayout";
import ShippingInformationLayout from "../layout/ShippingInformationLayout";
import YourCartLayout from "../layout/YourCartLayout";

const PaymentPage = () => {
	return (
		<>
			<Header />
			<PaymentPageLayout
				children={{
					shippingInformation: <ShippingInformationLayout />,
					paymentMethod: <PaymentMethodLayout />,
					yourCart: <YourCartLayout />,
				}}
			/>
		</>
	);
};

export default PaymentPage;
