import React, { Component } from "react";
import CLassComponentChild from "./ClassComponentChild";
import { Helmet } from "react-helmet";

export default class CLassComponent1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "My Class Comonent",
		};
		console.log("constructor::::", this.state);
	}
	static getDerivedStateFromProps(props, state) {
		console.log("getDerivedStateFromProps:::", state);
		return null;
	}
	componentDidMount() {
		console.log("componentDidMount:::", this.state);
	}
	render() {
		console.log("render:::", this.state);
		return (
			<>
				<Helmet>
					<title>React Class Component</title>
				</Helmet>
				<h1>{this.state.title}</h1>Hello Class Component
				<CLassComponentChild />
			</>
		);
	}
}
