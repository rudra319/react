import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import Home, { ChildAvi } from "../../../pages/avinash/pages/Home";

import Footer from "../../../pages/avinash/includes/Footer";
import { Container, Form } from "react-bootstrap";
import Header from "../../../pages/avinash/includes/Header";
import FeedbackForm from "../Container/FeedbackForm";

function Avinash() {
	return (
		<Container>
			<FeedbackForm />
			<Header />
			<Home />
			<ChildAvi />
			<Footer />
		</Container>
	);
}

export default Avinash;
