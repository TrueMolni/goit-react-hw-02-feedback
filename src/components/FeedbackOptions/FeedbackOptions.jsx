import PropTypes from 'prop-types';
import scss from './feedbackOptions.module.scss';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  const elements = options.map(propName => (
    <button
      className={scss.button}
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

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
