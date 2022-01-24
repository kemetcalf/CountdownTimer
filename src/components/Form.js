import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

class AddTimer extends React.Component {
  state = {
    event: "",
    date: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.event === "" || this.state.date === "") {
      return (
        <Alert variant="info" dismissible="true">
          "Please fill out all fields!"
        </Alert>
      );
    }

    this.props.addTimerHandler(this.state);
    this.setState({ event: "", date: "" });
  };

  render() {
    return (
      <Form onSubmit={this.add}>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={1}></Form.Label>
          <Col sm={10}>
            <Form.Control
              type="string"
              placeholder="Event name"
              value={this.state.event}
              onChange={(e) => this.setState({ event: e.target.value })}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={1}></Form.Label>
          <Col sm={10}>
            <Form.Control
              type="datetime-local"
              name="endDate"
              placeholder="Date"
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.target.value })}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 1 }}>
            <Button type="submit" size="lg" variant="primary">
              Begin Countdown
            </Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}
export default AddTimer;
