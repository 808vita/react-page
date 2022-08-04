import React from "react";

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
const YourCartLayout = () => {
	return (
		<>
			<div className="row mb-3 text-start">
				<h6>Your Cart</h6>
			</div>
			<div className="row mb-3 text-center">
				<div className="row mb-3 text-center">
					{cartItems.map((cartItem) => (
						<div key={cartItem.itemId} className="col-sm-12 ">
							<div className="mb-3 text-center d-flex justify-content-evenly">
								<div>
									<img src={cartItem.img} className="cart-img" />
								</div>
								<div>
									<h6>{cartItem.itemText}</h6>
									<p>{cartItem.itemId}</p>
								</div>
								<div>
									<h6>${cartItem.itemPrice}</h6>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="row mb-3 text-center total-cost d-flex justify-content-center">
				<div className="col-sm-5 total-text">Total Cost</div>
				<div className="col-sm-5 total-price">$price</div>
			</div>
			<div className="row mb-3 text-center">Free shipping text</div>
		</>
	);
};

export default YourCartLayout;
