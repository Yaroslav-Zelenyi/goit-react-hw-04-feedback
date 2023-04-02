import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

 const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btn__list}>
      {options.map(opt => (
        <button
          className={css.btn}
          key={opt}
          onClick={() => onLeaveFeedback(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
