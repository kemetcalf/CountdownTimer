import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";

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

const ICON_COLORS = [
  "#/0d6efd",
  "#/6610f2",
  "#/6f42c1",
  "#/d63384",
  "#/dc3545",
  "#/fd7e14",
  "#/ffc107",
  "#/198754",
  "#/20c997",
  "#/0dcaf0",
];

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
      <Form onSubmit={this.add}>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Col sm={10}>
            <Form.Control
              type="string"
              placeholder="Event name"
              value={this.state.event}
              onChange={(e) => this.setState({ event: e.target.value })}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
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

        <Dropdown
          className="d-inline mx-2"
          autoClose="inside"
          onSelect={this.handleSelect}
        >
          <Dropdown.Toggle id="dropdown-autoclose-inside">
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
          className="d-inline mx-2"
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

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 1 }}>
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
