import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Form, Row, Table } from "react-bootstrap";
import { getFeedBackData } from "../action";
import { Helmet } from "react-helmet";

function Home() {
	const dispatch = useDispatch();
	const rootState = useSelector((state) => state);

	const {
		feedbackLoading = false,
		feedbackData: distRes = [],
		feedbackError = false,
		feedbackMsg = "",
	} = rootState || {};

	useEffect(() => {
		getFeedBackData(dispatch);
	}, []);

	return (
		<>
			<Helmet>
				<title>Avinash Component</title>
			</Helmet>

			<Row>
				<Col md="4">
					<div class="card">
						<div className="card-body">
							<h5 className="card-title">About</h5>
							“Every life is precious...” has always been the guiding principle
							of Hon’ble Chief Minister Naveen Patnaik. The vision of Hon’ble
							Chief Minister has been to provide assurance of quality health
							care to all the citizens of the State, especially the vulnerable
							sections. With this objective, Biju Swasthya Kal
						</div>
					</div>
				</Col>
				<Col md="4">
					<div class="card">
						<div className="card-body">
							<h5 className="card-title">Services</h5>
							State Government will bear full cost of all health services
							delivered to all patients (irrespective of income, status or
							residence) in all State Government health care facilities starting
							from Sub centre level to District Head Quarter and Government
							Medical College Hospital and Blood Bank level.
						</div>
					</div>
				</Col>
				<Col md="4">
					<div className="card">
						<div className="card-body">
							<h5 class="card-title">Benefits</h5>
							State Government will bear the cost of healthcare provided in
							empanelled private hospitalsfor over 96.5 lakh economically
							vulnerable families in the State, amounting to Annual Health
							coverage of Rs. 5 lakh per family and additional Rs. 5lakh for the
							women members of the family after exhaust of initial limit.
						</div>
					</div>
				</Col>
			</Row>
			<br></br>
			<Row>
				<Col className="content" md="8">
					<h5 className="card-title">Feedback List</h5>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
								<th>Mobile</th>
								<th>Remarks</th>
								<th>Given On</th>
							</tr>
						</thead>
						<tbody>
							{distRes
								.filter((item) => item.vchName != "")
								.map((item, index) => {
									return (
										<tr>
											<td>{index + 1}</td>
											<td>{item.vchName}</td>
											<td>{item.vchMail}</td>
											<td>{item.intMobile}</td>
											<td>{item.vchFeedback}</td>
											<td>{item.dtmCreatedOn}</td>
										</tr>
									);
								})}
						</tbody>
					</Table>
					{feedbackLoading == true && <h1>Loading....</h1>}
					{feedbackError == true && <h1>Error :( {feedbackMsg}</h1>}
				</Col>
				<Col md="4">
					<div className="card">
						<div className="card-body">
							<h5 class="card-title">Feedback Form</h5>
							<Form method="post">
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Your Name</Form.Label>
									<Form.Control type="text" placeholder="Enter Name" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicMobile">
									<Form.Label>Contact No.</Form.Label>
									<Form.Control type="text" placeholder="Enter Name" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
									{/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Feedback</Form.Label>
									<Form.Control type="text" placeholder="Your Feedback" />
								</Form.Group>
								<Form.Control
									type="submit"
									variant="primary"
									className="btn btn-success"
								/>

								{/* <Button variant="primary" className="btn-primary">Primary</Button> */}
							</Form>
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
}

export function ChildAvi() {
	return <h1>I'm Avi's Child</h1>;
}
export default Home;
