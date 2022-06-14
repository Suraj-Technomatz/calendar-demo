import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import map from "lodash/map";

const CalendarView = ({ facilities, Events }) => {
  console.log("=============== CCCCCCCCC facilities ====>>>", facilities);
  console.log("=============== CCCCCCCCC Events ====>>>", Events);
  const renderCells = (numberOfCells) => {
    let tempArray = [];
    for (let i =0; i<numberOfCells; i++) {
        tempArray.push(i);
    }

    return tempArray
  }

  return (
    <>
      {map(facilities, (facility) => {
        return (
          <>
            <Row>
              <Col>
                <div className="calender_heading">{facility.facility_name}</div>
              </Col>
            </Row>
            <Row>
              {map(facility.resource_names, (resourceName) => {
                return (
                  <Col className="border">
                    <div className="font-weight-bold">{resourceName.name}</div>
                  </Col>
                );
              })}
            </Row>
            {map([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], (i) => {
              return (
                <Row className="time_slot">
                  {map(facility.resource_names, (resourceName) => {
                    return (
                      <Col className="border">
                        <Row>
                          {map([1,2,3], no => {
                            return (
                                <Col className="inner_cell">{no}</Col>
                            )
                          })}
                        </Row>
                      </Col>
                    );
                  })}
                </Row>
              );
            })}
          </>
        );
      })}
    </>
  );
};

CalendarView.propTypes = {};
export default CalendarView;
