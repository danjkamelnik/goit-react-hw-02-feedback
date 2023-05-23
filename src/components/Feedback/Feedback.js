import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () =>
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));

  handleClickNeutral = () =>
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));

  handleClickBad = () =>
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.handleClickGood}>
            Good
          </button>
          <button type="button" onClick={this.handleClickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleClickBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback}</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
