import React from "react";
import "./Button.css";

export default function Button({ children, className, ...props }) {
	return (
		<button {...props} className={`my-button ${className}`}>
			{children}
		</button>
	);
}
