import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import map from "lodash/map";

const CalendarView = ({ facilities, Events }) => {
    console.log("=============== CCCCCCCCC facilities ====>>>", facilities)
    console.log("=============== CCCCCCCCC Events ====>>>", Events)
    return (
        <>
            {
                map(facilities, facility => {
                    return (
                        <>
                            <Row>
                                <Col>
                                    <div className="calender_heading">
                                        {facility.facility_name}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                {map(facility.resource_names, resourceName => {
                                    return (
                                        <Col>
                                            <div className="">{resourceName.name}</div>
                                        </Col>
                                    )
                                } )}
                            </Row>
                        </>
                    )
                })
            }
        </>
    );
}

CalendarView.propTypes = {

}
export default CalendarView;