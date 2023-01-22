import PropTypes from 'prop-types';
import scss from './section.module.scss';

const Section = ({ title, children }) => {
  return (
    <div className={scss.block}>
      <h2 className={scss.blockTitle}> {title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
