import React from "react";

export const BigButton = ({ text, type }) => {
	return (
		<button
			type="button"
			class={`btn rounded-button ${
				type === "green" ? "btn-primary" : "outline-button"
			}`}
		>
			{text}
		</button>
	);
};

export const LongButton = ({ text, type }) => {
	return (
		<button
			type="button"
			class={`btn rounded-button ${
				type === "green" ? "btn-primary" : "outline-button-long"
			}`}
		>
			{text}
		</button>
	);
};
