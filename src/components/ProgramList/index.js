import React from "react";
import PropTypes from "prop-types";
import map from "lodash/map";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ProgramList = ({ programs }) => {
  console.log("=========== programs ========>>>", programs);
  return (
    <div>
      {map(programs, (program) => {
        return (
          <>
            <h6>
              {program.name}
            </h6>
              {map(program?.divisions, (division) => {
                return (
                  <>
                    <div>
                      <div
                        className="side_nav_collapse"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${division.name}`}
                      >
                        <div>
                            <input type="checkbox"  className="custom_checkbox mr-5" />
                            <span>{division.name}</span>
                        </div>
                        <BsFillCheckCircleFill className="text-align-right"/>
                      </div>
                      <ul
                        className="division_events collapse"
                        id={division.name}
                      >
                        {map(division.events, (event) => {
                          return (
                            <li>
                                <span>{event.resource_name}</span>
                                <BsFillCheckCircleFill className="text-align-right"/>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                );
              })}
          </>
        );
      })}
    </div>
  );
};

ProgramList.propTypes = {
  programs: PropTypes.object.isRequired,
};

export default ProgramList;
