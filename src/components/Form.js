import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const TIMER_ICONS = [
	"alarm",
	"bell",
	"bicycle",
	"award",
	"book-half",
	"bookmark-heart",
	"boombox",
	"brush",
	"bug-fill",
	"calendar-event",
	"camera2",
	"camera-reels",
	"cash-coin",
	"cloud-rain",
	"cloud-moon-fill",
	"flower1",
	"flag",
	"gear-wide-connected",
	"gem",
	"geo",
	"gift",
	"globe2",
	"heart-fill",
	"house-fill",
	"life-preserver",
	"lightbulb",
	"lightning-fill",
	"magic",
	"mic-fill",
	"moon-stars",
	"mortarboard",
	"music-note-beamed",
	"palette",
	"peace",
	"people-fill",
	"pin",
	"start-half",
	"stars",
	"ticket-perforated",
	"tools",
	"tornado",
	"trash",
	"tree",
	"trophy-fill",
	"truck",
	"tsunami",
	"umbrella",
	"wind",
	"water",
	"sun",
	"stopwatch",
	"snow",
	"puzzel-fill",
	"robot",
];

// TODO: Implement Color Picker from WIPit project
// TODO: Refactor as function component to more effectively use state
// const ICON_COLORS = [
// 	"#/0d6efd",
// 	"#/6610f2",
// 	"#/6f42c1",
// 	"#/d63384",
// 	"#/dc3545",
// 	"#/fd7e14",
// 	"#/ffc107",
// 	"#/198754",
// 	"#/20c997",
// 	"#/0dcaf0",
// ];
function TimerForm() {
	const [timerInfo, setTimerInfo] = useState({
		event: "My Event",
		date: "",
		icon: "",
		color: "#E40CF0",
	});

	function handleChange(e) {
		e.preventDefault();
		setTimerInfo({ ...timerInfo, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(timerInfo);
		addTimer(timerInfo);
		setTimerInfo({ event: "", date: "", icon: "", color: "#E40CF0" });
	}

	return (
		<div>
			{/* TODO: Hook up new WIPit version of color picker to existing variables */}
			<Row>
				<Col xs={8}>
					<Form.Group controlId="timerColorInput" className="mb-3">
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							aria-label="With textarea"
							type="text"
							name="description"
							placeholder="e.g. Adult Link from Ocarina of Time"
							value={timerInfo.description}
							onChange={handleChange}
						/>
					</Form.Group>
				</Col>
				<Col
					xs={2}
					className="d-sm-grid align-content-end justify-content-center"
				>
					<Form.Group controlId="timerColorInput" className="mb-3">
						<Form.Label>Color picker</Form.Label>
						<Form.Control
							type="color"
							title="Choose your color"
							className="mx-3"
							name="color"
							value={timerInfo.color}
							onChange={handleChange}
						/>
					</Form.Group>
				</Col>
			</Row>
		</div>
	);
}

// export default TimerForm;

class AddTimer extends React.Component {
	state = {
		event: "",
		date: "",
		icon: "",
		color: "",
	};

	add = (e) => {
		e.preventDefault();
		if (this.state.event === "" || this.state.date === "") {
			alert("Please fill out all fields!");
			return;
		}

		this.props.addTimerHandler(this.state);
		this.setState({ event: "", date: "", icon: "", iconColor: "" });
	};

	handleSelect = (icon) => {
		const svgForm = icon.slice(2);
		this.setState({ icon: svgForm });
	};

	handleColor = (color) => {
		const formatColor = color;
		const validColor = formatColor.replace("#/", "#");
		console.log(validColor);
		this.setState({ color: validColor });
	};

	render() {
		return (
			<Form onSubmit={this.add} className="container text-center mx-auto">
				<Form.Group
					as={Row}
					className="mb-3 justify-content-center mx-auto"
					controlId="formHorizontalPassword"
				>
					<Col sm={10} className="col-12">
						<Form.Control
							type="string"
							placeholder="Event name"
							value={"" + this.state.event}
							onChange={(e) => this.setState({ event: e.target.value })}
						/>
					</Col>
				</Form.Group>

				<Form.Group
					as={Row}
					className="mb-3 justify-content-center mx-auto"
					controlId="formHorizontalEmail"
				>
					<Col sm={10}>
						<Form.Control
							type="datetime-local"
							name="endDate"
							placeholder="Date"
							value={this.state.date}
							onChange={(e) => this.setState({ date: e.target.value })}
						/>
					</Col>
				</Form.Group>
				<div className="container text-center">
					<div className="row justify-content-center mx-auto">
						<Dropdown
							className="d-inline mx-2 col-5"
							autoClose="inside"
							onSelect={this.handleSelect}
						>
							<Dropdown.Toggle id="dropdown-autoclose-inside" className=" mb-3">
								Event Icon
							</Dropdown.Toggle>
							<Dropdown.Menu className="dropdown-menu">
								{TIMER_ICONS.map((title) => {
									return (
										<Dropdown.Item href={`#/bi bi-${title}`} key={title}>
											<i className={`bi bi-${title}`}></i>
										</Dropdown.Item>
									);
								})}
							</Dropdown.Menu>
						</Dropdown>

						<Dropdown
							className="d-inline mx-2 col-5"
							autoClose="inside"
							onSelect={this.handleColor}
						>
							<Dropdown.Toggle id="dropdown-autoclose-inside">
								Icon Color
							</Dropdown.Toggle>
							<Dropdown.Menu className="dropdown-menu">
								{ICON_COLORS.map((color) => {
									const swatch = color;
									return (
										<Dropdown.Item href={swatch} key={swatch}>
											<i
												className="bi bi-circle-fill"
												style={{ color: swatch }}
											></i>
										</Dropdown.Item>
									);
								})}
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>

				<Form.Group as={Row} className="mb-3 justify-content-center mx-auto">
					{/* <Col sm={{ span: 10, offset: 1 }}> */}
					<Col>
						<Button
							type="submit"
							className="submit"
							size="lg"
							variant="primary"
						>
							Begin Countdown
						</Button>
					</Col>
				</Form.Group>
			</Form>
		);
	}
}
export default AddTimer;
