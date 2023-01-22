import propTypes from 'prop-types';
import scss from './statistics.module.scss';

function Statistics({ good, neutral, bad, total, goodPercent }) {
  return (
    <>
      <h2>Statistics</h2>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive percentage: {goodPercent}%</p>
    </>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  goodPercent: propTypes.number.isRequired,
};
