import React, { Component } from 'react';
import scss from 'feedback.module.scss';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

const feedbackOptions = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) return 0;
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  leaveFeedback = propName => {
    this.setState(prevState => {
      return {
        [propName]: prevState[propName] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    const goodPercent = this.countPositiveFeedbackPercentage('good');

    return (
      <>
        <div className={scss.wrapper}>
          <Section title="Please leave feedback">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              goodPercent={goodPercent}
            ></Statistics>
          </Section>

          <Section title="Statistics">
            <FeedbackOptions
              options={feedbackOptions}
              leaveFeedback={this.leaveFeedback}
            ></FeedbackOptions>
          </Section>
        </div>
      </>
    );
  }
}

export default App;
