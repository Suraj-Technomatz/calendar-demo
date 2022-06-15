import React from "react";
import PropTypes from "prop-types";
import map from "lodash/map";

const ProgramList = ({ programs }) => {
  console.log("=========== programs ========>>>", programs);
  return (
    <div>
      {map(programs, (program) => {
        return (
          <>
            <h6>
              {program.name}
              {map(program?.divisions, (division) => {
                return (
                  <>
                    <div>
                      <div
                        className="side_nav_collapse"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${division.name}`}
                      >
                        {division.name}{" "}
                      </div>
                      <ul
                        className="division_events collapse"
                        id={division.name}
                      >
                        {map(division.events, (event) => {
                          return <li>{event.resource_name}</li>;
                        })}
                      </ul>
                    </div>
                  </>
                );
              })}
            </h6>
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
