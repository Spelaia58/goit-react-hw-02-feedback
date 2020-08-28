import React from "react";
import Section from "./components/Section";
import Notification from "./components/Notifications";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbacksOptions";

class App extends React.Component {
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

  handleIncrementButton(option) {
    this.countTotal++;

    this.setState((state) => ({
      [option]: state[option] + 1,
    }));
  }

  countTotalFeedback = (values) => {
    this.countTotal = values.reduce((acc, value) => acc + value, 0);

    return this.countTotal;
  };

  countPositiveFeedbackPercentage() {
    const positiveValue = this.state.good;

    return Math.round((positiveValue * 100) / this.countTotal) || 0;
  }
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrementButton}
          />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotal === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(Object.values(this.state))}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
