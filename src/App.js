import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Getting data from files
import ApiData from "./data";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: ApiData,
    };
  }

  render() {
    return (
      <Container fluid>
        <div className="main_container">
          <Row>
            <Col md={4}>
              <div className="programs_views">PRograms List</div>
            </Col>
            <Col md={8}>
              <div className="calendar_views">Calendar List</div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default App;
