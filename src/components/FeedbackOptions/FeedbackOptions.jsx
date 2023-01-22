import PropTypes from 'prop-types';
// import scss from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  const elements = options.map(propName => (
    <button
      key={propName}
      onClick={() => {
        return leaveFeedback(propName);
      }}
      type="button"
    >
      {propName}
    </button>
  ));
  return <>{elements}</>;
};

{
  /* <h2 className={scss.title}>Please leave feedback</h2>
      <button onClick={onClick} className={scss.button} type="button">
        Good
      </button>
      <button onClick={onClick} className={scss.button} type="button">
        Neutral
      </button>
      <button onClick={onClick} className={scss.button} type="button">
        Bad
      </button> */
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
