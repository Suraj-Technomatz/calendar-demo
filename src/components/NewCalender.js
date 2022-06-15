import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import map from "lodash/map";
import filter from "lodash/filter";
import find from "lodash/find";
import { getTimeSlots } from "../helpers";

const CalendarView = ({ facilities, Events, setEvent }) => {
  const [resourceSize] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
  ]);

  const onDragEvent = (ev, event) => {
    if (event.onCalendar) {
      return
    }
    ev.dataTransfer.setData("eventId", event.eventId);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, slot, resource) => {
    const id = ev.dataTransfer.getData("eventId");
    const updatedEvents = Events.map((event) => {
      if (event.eventId === parseInt(id)) {
        event.start_time = slot.startTime;
        event.end_time = slot.endTime;
        event.resource_id = resource.id;
      }
      return event;
    });

    setEvent(updatedEvents);
  };

  const getSlot = (time, resourceID, facility) => {
    const events = filter(Events, { resource_id: resourceID });

    return (
    <>
    {events && events.map((event) => {
        const eventStartTime = event.start_time.split(":")[0];

        const slotStartTime = time.startTime.split(":")[0];
        const eventAA = event.start_time.split(" ")[1];
        const slotAA = time.startTime.split(" ")[1];


        const parentOfEvent = find(facility.resource_names, {id: resourceID});
        if ((`${slotStartTime} ${slotAA}` === `${eventStartTime} ${eventAA}`)) {
          const style = {
            width:  (100 / parentOfEvent.resource_size_count) * event.subresource  + '%',
        };
          return (
            <div
              key={event.id}
              draggable
              onDragStart={(e) => {
                onDragEvent(e, event);
              }}
              // className={classNames({""})}
              style={style}
            >
              <div className={
                event.onCalendar ? "calendar_event black": "calendar_event"
              }>
                <div>Name: {event.resource_name}</div>
                <div>Start: {time.startTime}</div>
              </div>
            </div>
          );
        }
      })}
    </>)
  };

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
                    <div className="fw-bold text-center">
                      {resourceName.name}
                    </div>
                    <Row>
                      {map(
                        resourceSize.slice(0, resourceName.resource_size_count),
                        (res) => {
                          return (
                            <Col className="border-top">
                              <div className="fw-bold text-center">{res}</div>
                            </Col>
                          );
                        }
                      )}
                    </Row>
                  </Col>
                );
              })}
            </Row>

            {getTimeSlots(facility.facility_name)?.map((timeSlot) => {
              return (
                <Row className="time_slot">
                  <span className="time_slot_name">{timeSlot.short}</span>
                  {map(facility.resource_names, (resourceName) => {
                    return (
                      <Col
                        onDragOver={(e) => onDragOver(e)}
                        onDrop={(e) => onDrop(e, timeSlot, resourceName)}
                        className="border"
                      >
                        {getSlot(timeSlot, resourceName.id, facility)}
                        <Row>
                          {map(
                            resourceSize.slice(
                              0,
                              resourceName.resource_size_count
                            ),
                            (time) => {
                              return <Col className="inner_cell"></Col>;
                            }
                          )}
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

export default CalendarView;
