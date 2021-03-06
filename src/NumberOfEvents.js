import React, { Component } from "react";
import PropTypes from "prop-types";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 3,
    errorText: "",
  };

  handleInput = (event) => {
    const value = Number(event.target.value);
    this.props.updateEvents(null, value);
    if (value < 1) {
      this.setState({
        errorText: "please choose a number greater than or equal to 1",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <label className="eventNumLabel">number of events: &nbsp;</label>
        <input
          className="number"
          type="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInput}
        ></input>
      </div>
    );
  }
}

NumberOfEvents.propTypes = {
  numberOfEvents: PropTypes.number,
  updateEvents: PropTypes.func.isRequired,
};

export default NumberOfEvents;
