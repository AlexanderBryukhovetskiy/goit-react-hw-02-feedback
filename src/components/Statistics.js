import React from "react";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

    return (
        <ul className={css.statistics}>
            <li>
                <h2 className={css.statItem}>
                    Good:
                    <span>{good}</span>
                </h2>
            </li>    
            <li>
                <h2 className={css.statItem}>
                    Neutral:  
                    <span>{neutral}</span>
                </h2>
            </li>
            <li>
                <h2 className={css.statItem}>
                    Bad:  
                    <span>{bad}</span>
                </h2>
            </li>    
            <li>
                <h2 className={css.statItem}>
                    Total:  
                    <span>{total}</span>
                </h2>
            </li>  
            <li>
                <h2 className={css.statItem}>
                    Positive feedback:  
                    <span>{positivePercentage}%</span>
                </h2>
            </li>
        </ul>
    );
}

Statistics.propTypes= {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default Statistics;