import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Draggable from "react-draggable";

// Getting data from files
import ApiData from "./data";
import ProgramList from "./components/ProgramList";
import CalendarView from "./components/NewCalender";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: ApiData,
      Events: ApiData.Events,
    };
  }

  setEvent = (updatedEvents) => {
    this.setState({ Events: updatedEvents });
  };

  render() {
    const { facilities, programs, Events } = this.state.data;
    return (
      <Container fluid>
        <div className="main_container">
          <Row>
            <Col md={2}>
              <div className="programs_views">
                <ProgramList programs={programs} />
              </div>
            </Col>
            <Col md={10} className="right_panel">
              <div className="calendar_views">
                <CalendarView
                  facilities={facilities}
                  Events={Events}
                  setEvent={this.setEvent}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default App;
