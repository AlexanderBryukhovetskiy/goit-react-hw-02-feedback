import React from "react";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

    return (
        <ul className={css.statistics}>
            <li>
                <h2 className={css.statItem}>
                    Good: &nbsp; 
                    <span>{good}</span>
                </h2>
            </li>    
            <li>
                <h2 className={css.statItem}>
                    Neutral: &nbsp;   
                    <span>{neutral}</span>
                </h2>
            </li>
            <li>
                <h2 className={css.statItem}>
                    Bad:   &nbsp; 
                    <span>{bad}</span>
                </h2>
            </li>    
            <li>
                <h2 className={css.statItem}>
                    Total: &nbsp;    
                    <span>{total}</span>
                </h2>
            </li>  
            <li>
                <h2 className={css.statItem}>
                    Positive feedback:   &nbsp; 
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