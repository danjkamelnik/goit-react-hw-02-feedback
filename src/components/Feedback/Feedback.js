import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickFeedback = event => {
    const value = event.target.value;
    this.setState(prevState => {
      return {
        [value]: prevState[event] + 1,
      };
    });
  };

  // handleClickFeedback = event => {
  //   const value = event.currentTarget;
  //   console.log(event);
  //   this.setState(prevState => {
  //     return {
  //       [value]: prevState[value] + 1,
  //     };
  //   });
  // };

  // handleClickGood = () =>
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));

  // handleClickNeutral = () =>
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));

  // handleClickBad = () =>
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button
            type="button"
            value={this.value}
            onClick={this.handleClickFeedback}
          >
            Good
          </button>
          <button
            type="button"
            value={this.value}
            onClick={this.handleClickFeedback}
          >
            Neutral
          </button>
          <button
            type="button"
            value={this.value}
            onClick={this.handleClickFeedback}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>PositiveFeedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
