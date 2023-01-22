import propTypes from 'prop-types';
import scss from './statistics.module.scss';

function Statistics({ good, neutral, bad, total, goodPercent }) {
  return (
    <>
      <p className={scss.text}>Good: {good}</p>
      <p className={scss.text}>Neutral: {neutral}</p>
      <p className={scss.text}>Bad: {bad}</p>
      <p className={scss.text}>Total: {total}</p>
      <p className={`${scss.text} ${scss.accent}`}>
        Positive percentage: {goodPercent}%
      </p>
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
