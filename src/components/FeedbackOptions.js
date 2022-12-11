import React from "react";
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.buttonsList}>
            {options.map( name => (
                <button 
                    // type="button"
                    key={name}
                    onClick={ () => onLeaveFeedback(name) }
                >
                    {name}
                </button>
            ))}
        </div>
    )
    }


export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};
