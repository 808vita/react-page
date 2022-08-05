import React from "react";

const CartItem = ({ img, itemText, itemId, itemPrice }) => {
	return (
		<div className="col-sm-12 ">
			<div className="mb-3 text-center gap-2 d-flex justify-content-evenly">
				<div>
					<img src={img} className="cart-img" />
				</div>
				<div>
					<h6 className="mb-2 text-start pe-3">{itemText}</h6>
					<p className="text-secondary text-start itemId">{itemId}</p>
				</div>
				<div>
					<h6 className="text-center ">${itemPrice}</h6>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
