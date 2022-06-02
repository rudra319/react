import React from "react";
import { useSelector } from "react-redux";

export default function MyFormData() {
	const rootState = useSelector((state) => state || {});
	console.log("rootState::::", rootState);

	const { myFormData: { email = "", password = "" } = {} } = rootState;
	return (
		<>
			<p>Email: {email}</p>
			<p>Password: {password}</p>
		</>
	);
}
