import React, { useState } from "react";
import Draggable from 'react-draggable';
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import map from "lodash/map";
import find from "lodash/find";

const CalendarView = ({ facilities, Events }) => {
  const  [timeSlots] = useState(
    [
     {short: "12 AM", full: "12:00 AM"},
     {short: "1 AM", full: "01:00 AM"},
     {short: "2 AM", full: "02:00 AM"},
     {short: "3 AM", full: "03:00 AM"},
     {short: "4 AM", full: "04:00 AM"},
     {short: "5 AM", full: "05:00 AM"},
     {short: "6 AM", full: "06:00 AM"},
     {short: "7 AM", full: "07:00 AM"},
     {short: "8 AM", full: "08:00 AM"},
     {short: "9 AM", full: "09:00 AM"},
     {short: "10 AM", full: "10:00 AM"},
     {short: "11 AM", full: "11:00 AM"},

     {short: "12 PM", full: "12:00 PM"},
     {short: "1 PM", full: "01:00 PM"},
     {short: "2 PM", full: "02:00 PM"},
     {short: "3 PM", full: "03:00 PM"},
     {short: "4 PM", full: "04:00 PM"},
     {short: "5 PM", full: "05:00 PM"},
     {short: "6 PM", full: "06:00 PM"},
     {short: "7 PM", full: "07:00 PM"},
     {short: "8 PM", full: "08:00 PM"},
     {short: "9 PM", full: "09:00 PM"},
     {short: "10 PM", full: "10:00 PM"},
     {short: "11 PM", full: "11:00 PM"},    
    ]
  );

  const [resourceSize] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);

  const renderCells = (numberOfCells) => {
    let tempArray = [];
    for (let i =0; i<numberOfCells; i++) {
        tempArray.push(i);
    }

    return tempArray
  }

  const getSlot = (time, resourceID) => {
    const event = find(Events, {resource_id: resourceID })
    if (event) {
      const eventStartTime = event.start_time.split(":")[0];
      if (time.full.split(":")[0] === eventStartTime) {
        return (
          <Draggable>
          <div className="calendar_event">
            <div>Name: {event.resource_name}</div>
            <div>Start: {event.start_time}</div>
          </div>
        </Draggable>
        )
      }
    }
  }

  console.log("============= Events ===========", Events);
  console.log("============= facilities ===========", facilities);
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
                    <div className="fw-bold text-center">{resourceName.name}</div>
                    <Row>
                      {
                        map(resourceSize.slice(0, resourceName.resource_size_count), res => {
                          return (
                            <Col className="border-top">
                              <div className="fw-bold text-center">{res}</div>
                            </Col>
                          )
                        })
                      }
                    </Row>
                  </Col>
                );
              })}
            </Row>

            {map(timeSlots, (timeSlot) => {
              return (
                <Row className="time_slot">
                  <span className="time_slot_name">{timeSlot.short}</span>
                  {map(facility.resource_names, (resourceName) => {
                    return (
                      <Col className="border">
                        {getSlot(timeSlot, resourceName.id)}
                        <Row>
                          {map(resourceSize.slice(0, resourceName.resource_size_count), time => {
                            return (
                              <Col className="inner_cell">
                                
                              </Col>
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
