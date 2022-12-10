import React, { Component }  from "react";
import css from './Feedback.module.css';
import PropTypes from 'prop-types';



class FeedBack extends Component {
    
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        totalFeedback: 0,
        positiveFeedbackPercentage: 0
    };
    

    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
        totalFeedback: PropTypes.number,
        positiveFeedbackPercentage: PropTypes.number
    };

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
    };
    
    handleIncrementGood = evt => {
        console.log('button GOOD was clicked');

        this.setState(prevState => {
            return { good: prevState.good +=1 }
        });
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    handleIncrementNeutral = evt => {
        console.log('button NEUTRAL was clicked');
        this.setState(prevState => {
            return { neutral: prevState.neutral +=1 }
        });
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    handleIncrementBad = evt => {
        console.log('button BAD was clicked');
        this.setState(prevState =>{
            return {bad: prevState.bad +=1}
        });
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        
    };

    // refs = {
    //     totalFeedback: this.props.totalFeedback,
    //     positiveFeedbackPercentage: this.props.positiveFeedbackPercentage
    // };

    countTotalFeedback = evt =>{
        const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
        
        console.log("totalFeedback in countTotalFeedback() :", totalFeedback);

        //this.props.totalFeedback = totalFeedback;
        
        return (totalFeedback);          //????????????????????????????
    };
        
    countPositiveFeedbackPercentage = evt => {
        const total = this.countTotalFeedback();
        console.log("totalFeedback in countPositiveFeedbackPercentage:", total);

        const positiveFeedbackPercentage = this.state.good/total*100;
        console.log("positiveFeedbackPercentage in countPositiveFeedbackPercentage() :", positiveFeedbackPercentage);

        //this.props.positiveFeedbackPercentage = positiveFeedbackPercentage;

        return (positiveFeedbackPercentage); //    ?????????????????????????????
    };

    render () {
        return (<div className={css.feedbackBlock}>
                    <p className={css.title}>Please leave feedback</p>
                    <div className={css.buttonsList}>
                        <button type="button"
                                onClick={this.handleIncrementGood}
                                >good</button>
                        <button type="button"
                                onClick={this.handleIncrementNeutral}
                                >neutral</button>
                        <button type="button"
                                onClick={this.handleIncrementBad}
                                >bad</button>                    
                    </div>
                    <h1 className={css.title}>Statistics</h1>
                    <ul className={css.statistics}>
                        <li>
                            <h2 className={css.statItem}>
                                Good:
                                <span>{this.state.good}</span>
                            </h2>
                        </li>    
                        <li>
                            <h2 className={css.statItem}>
                                Neutral:  
                                <span>{this.state.neutral}</span>
                            </h2>
                        </li>
                        <li>
                            <h2 className={css.statItem}>
                                Bad:  
                                <span>{this.state.bad}</span>
                            </h2>
                        </li>    
                        <li>
                            <h2 className={css.statItem}>
                                Total:  
                                <span>{this.props.totalFeedback}</span>
                            </h2>
                        </li>  
                        <li><h2 className={css.statItem}>Positive feedback:  <span>{this.props.positiveFeedbackPercentage}%</span></h2></li>
                    </ul>
                </div>
        )
    }

}

export default FeedBack;