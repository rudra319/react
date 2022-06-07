import React, { Component } from "react";
// import CLassComponentChild from "./ClassComponentChild";
import { Helmet } from "react-helmet";
import Button from "../../Components/Button/Button";

export default class CLassComponent1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "My Class Comonent",
			name: "Sanjaya",
			desc: "I'm a JS Developer",
		};
		console.log("constructor::::", this.state);
	}
	static getDerivedStateFromProps(props, state) {
		console.log("getDerivedStateFromProps:::", state);
		return null;
	}

	render() {
		console.log("render:::", this.state);
		return (
			<>
				<Helmet>
					<title>React Class Component</title>
				</Helmet>
				<h1>{this.state.name} Here</h1>
				<p>{this.state.desc}</p>
				{/* <CLassComponentChild /> */}
				<Button
					onClick={() => this.clickMe()}
					style={{ color: "red" }}
					className="btn-prime"
				>
					Click Me
				</Button>
				<p>
					{(this.state.myData && this.state.myData.title) || "API Loading..."}
				</p>
				<br />
				<button onClick={() => this.callAPI()}>2nd Button</button>
			</>
		);
	}

	componentDidMount() {
		console.log("componentDidMount:::", this.state);
		this.callAPI();
	}

	clickMe() {
		this.setState({ name: "Kalki", desc: "I'm a Rapper" });
	}
	async callAPI() {
		await fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				this.setState({ myData: json });
			});

		console.log("Yo Yo");
	}
}
