import React, { Component } from "react";

export default class CLassComponentChild extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "My Class Comonent Child",
		};
		console.log("constructor - Child::::", this.state);
	}
	static getDerivedStateFromProps(props, state) {
		console.log("getDerivedStateFromProps - Child:::", state);
		return null;
	}
	componentDidMount() {
		console.log("componentDidMount - Child:::", this.state);
	}
	render() {
		console.log("render - Child:::", this.state);
		return (
			<>
				<h1>{this.state.title}</h1>Hello Class Component Child
			</>
		);
	}
}
