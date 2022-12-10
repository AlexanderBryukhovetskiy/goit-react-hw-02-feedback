import React from "react";
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';



const FeedbackOptions = (options, onLeaveFeedback) => {
       
    // handleIncrementGood = evt => {
        
    //     this.setState(prevState => {
    //         return { good: prevState.good +=1 }
    //     });
    // };

    // handleIncrementNeutral = evt => {
        
    //     this.setState(prevState => {
    //         return { neutral: prevState.neutral +=1 }
    //     });
    // };

    // handleIncrementBad = evt => {
        
    //     this.setState(prevState =>{
    //         return {bad: prevState.bad +=1}
    //     });
        
    // };

        return (<div className={css.feedbackBlock}>
                    {options.map( ({key}) => (
                    
                        <div className={css.buttonsList}>
                            <button type="button"
                                    onLeaveFeedback
                            >{key}</button>
                            
                        </div>
                    ))}
                </div>
        )
    }


export default FeedbackOptions;