import { Component } from 'react';

import scss from './feedback.module.scss';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  calcTotal() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  calcPercent(propName) {
    const total = this.calcTotal();
    if (!total) return 0;
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  leaveFeedback(propName) {
    this.setState(prevState => {
      return {
        [propName]: prevState[propName] + 1,
      };
    });
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.calcTotal();

    const goodPercent = this.calcPercent('good');
    const neutralPercent = this.calcPercent('neutral');
    const badPercent = this.calcPercent('bad');

    return (
      <div className={scss.wrapper}>
        <div className={scss.block}>
          <h2 className={scss.title}>Please leave feedback</h2>
          <button
            onClick={() => this.leaveFeedback('good')}
            className={scss.button}
            type="button"
          >
            Good
          </button>
          <button
            onClick={() => this.leaveFeedback('neutral')}
            className={scss.button}
            type="button"
          >
            Neutral
          </button>
          <button
            onClick={() => this.leaveFeedback('bad')}
            className={scss.button}
            type="button"
          >
            Bad
          </button>
        </div>
        <div className={scss.block}>
          <h2 className={scss.title}>Statistics</h2>
          <p>Total: {total}</p>
          <p>
            Good: {good} {goodPercent}%
          </p>
          <p>
            Neutral: {neutral} {neutralPercent}%
          </p>
          <p>
            Bad: {bad} {badPercent}%
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
