import React from "react";
import CartItem from "../components/CartItem";

const cartItems = [
	{
		img: require("../assests/polite-cat-shirt.jpg"),
		itemText: "T-Shirt Summer Vibes",
		itemPrice: "89.99",
		itemId: "#261311",
	},
	{
		img: require("../assests/cat-meme-shirt.jpg"),
		itemText: "Basic Slim Fit T-Shirt",
		itemPrice: "69.99",
		itemId: "#212315",
	},
];
let totalCostPrice = 0;
cartItems.map((item) => {
	return (totalCostPrice = Number(item.itemPrice) + totalCostPrice);
});
const YourCartLayout = () => {
	return (
		<>
			<div className="row mb-3 text-start">
				<h6>Your Cart</h6>
			</div>
			<div className="row mb-3 text-center">
				<div className="row mb-3 text-center">
					{cartItems.map((cartItem) => (
						<CartItem
							key={cartItem.itemId}
							img={cartItem.img}
							itemText={cartItem.itemText}
							itemPrice={cartItem.itemPrice}
							itemId={cartItem.itemId}
						/>
					))}
				</div>
			</div>
			<div className="row mb-3 text-center total-cost d-flex justify-content-between">
				<div className="col-sm-5 total-text">Total Cost:</div>
				<div className="col-sm-5 total-price">${totalCostPrice}</div>
			</div>
			<div className="row text-center">
				<div className="d-flex align-items-center justify-content-center px-5">
					<div className="d-inline">
						<i className="fas fa-truck h5"></i>
					</div>
					<p>
						You are <h6 className="d-inline">$30.02</h6> away from free
						shipping!
					</p>
				</div>
			</div>
		</>
	);
};

export default YourCartLayout;
