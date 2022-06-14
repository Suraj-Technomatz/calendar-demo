import React from "react";
import PropTypes from 'prop-types';
import map from "lodash/map";

const ProgramList = ({ programs }) => {
    console.log("=========== programs ========>>>", programs)
    return (
        <div>
            {
                map(programs, program => {
                    return (
                        <>
                            <h6>
                                {program.name}
                                {
                                    map(program?.divisions, division => {
                                        return (
                                            <>
                                                <div>
                                                    {division.name}
                                                    <ul>
                                                        {map(division.events, event => {
                                                            return <li>{event.resource_name}</li>
                                                        })}
                                                    </ul>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </h6>
                        </>
                    )
                })
            }
        </div>
    );
}

ProgramList.propTypes = {
    programs: PropTypes.object.isRequired
}

export default ProgramList;