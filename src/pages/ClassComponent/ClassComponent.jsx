import React, { Component } from "react";
// import CLassComponentChild from "./ClassComponentChild";
import { Helmet } from "react-helmet";
import Button from "../../Components/Button/Button";

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

	clickMe() {
		alert("Yo");
		this.setState(function (state, props) {
			return {
				title: "My Class Comonent Clicked",
			};
		});
	}
	render() {
		console.log("render:::", this.state);
		return (
			<>
				<Helmet>
					<title>React Class Component</title>
				</Helmet>
				<h1>{this.state.title}</h1>Hello Class Component
				{/* <CLassComponentChild /> */}
				<Button
					onClick={this.clickMe}
					style={{ color: "red" }}
					className="btn-prime"
				>
					Click Me
				</Button>
				<br />
				<button>2nd Button</button>
			</>
		);
	}

	componentDidMount() {
		console.log("componentDidMount:::", this.state);
	}
}
