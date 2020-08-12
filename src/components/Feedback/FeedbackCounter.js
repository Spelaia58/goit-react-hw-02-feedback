import React from "react";
import Controls from "./Feedbacks";
import Statistics from "./Value";

class FeedbackCounter extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };
  countTotal = 0;

  hendleIncrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  hendleIncrementNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  hendleIncrementBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = (values) => {
    this.countTotal = values.reduce((acc, value) => acc + value, 0);

    return this.countTotal;
  };

  countPositiveFeedbackPercentage() {
    const positiveValue = this.state.good;

    return Math.round((positiveValue * 100) / this.countTotal) || 0;
  }
  render() {
    return (
      <div>
        <Controls
          onIncrementGood={this.hendleIncrementGood}
          onIncrementNeutral={this.hendleIncrementNeutral}
          onIncrementBad={this.hendleIncrementBad}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback(Object.values(this.state))}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default FeedbackCounter;
