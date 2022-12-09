import React, { Component }  from "react";
import css from './task1.module.css';
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
        totalFeedback: this.props.totalFeedback,
        positiveFeedbackPercentage: this.props.positiveFeedbackPercentage
    };
    
    handleIncrementGood = evt => {
        console.log('button GOOD was clicked');

        this.setState(prevState => {
            return {good: prevState.good +=1
            }
        });
        console.log('button GOOD: setState function called');
        console.log('this.state.good: ', this.state.good);

        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    handleIncrementNeutral = evt => {
        console.log('button NEUTRAL was clicked');
        this.setState(prevState => {
            return {neutral: prevState.neutral +=1}
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

    countTotalFeedback = evt =>{
        console.log('countTotalFeedback() was initiated');
        this.setState(prevState => {
            console.log('prevState in countTotalFeedback:', prevState);
            return {totalFeedback: prevState.totalFeedback +=1}
        });
        
        console.log('countTotalFeedback(): setState function called');
        console.log('this.state.totalFeedback after setState function: ', this.state.totalFeedback);
    };

    countPositiveFeedbackPercentage = evt => {
        console.log('countPositiveFeedbackPercentage() was initiated');

        const good = this.state.good;
        console.log('good: ', good);

        const total = this.state.totalFeedback;
        console.log('total: ', total);

        let positivePercent = good/total*100;
        console.log('positivePercent: ', positivePercent);

        this.setState({positiveFeedbackPercentage: positivePercent});

        console.log('countPositiveFeedbackPercentage(): setState function called');
        console.log('this.state.positiveFeedbackPercentage after setState function: ', this.state.positiveFeedbackPercentage);

        // this.setState(prevState => {
        //     return {positiveFeedbackPercentage: positivePercent}
        // })
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
                                <span>{this.state.totalFeedback}</span>
                            </h2>
                        </li>  
                        <li>
                            <h2 className={css.statItem}>
                                Positive feedback:  
                                <span>{this.state.positiveFeedbackPercentage}%</span>
                            </h2>
                        </li>          
                    </ul>
                </div>
        )
    }

}

export default FeedBack;