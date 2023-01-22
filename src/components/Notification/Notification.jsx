import PropTypes from 'prop-types';
import scss from './notification.module.scss';

function Notification({ message }) {
  return <p className={scss.title}>{message}</p>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
