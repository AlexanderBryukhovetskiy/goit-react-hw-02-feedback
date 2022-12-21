import React, { Component }  from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import css from "./App.module.css";


export class App extends Component {

    state = {
        good: 0,
        neutral: 0, 
        bad: 0
    };

    leaveFeedback = name => {
        this.setState( prevState => {
            return { [name]: prevState[name] + 1}
        });
    };
    
    countTotalFeedback = evt =>{
        const {good, neutral, bad } = this.state;
        const totalFeedback = good + neutral + bad;
    
        return totalFeedback;          
    }; 

    countPositiveFeedbackPercentage = evt => {
        if (this.countTotalFeedback()) {
            const positivePercent = Math.round( this.state.good / this.countTotalFeedback() * 100);
            
            return positivePercent;
        }
    };

    render () {
        return (
            <div className={css.container}>
                <Section title="Please leave feedback">
                    <FeedbackOptions 
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.leaveFeedback}
                    />
                </Section>
                
                { this.countTotalFeedback() > 0 
                ?   (<Section title="Statistics">
                        <Statistics 
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()} 
                        />
                    </Section>)
                : ( <Notification message="There is no feedback" /> )  
                // : (<p>There is no feedback</p>)  
                }
            </div>
            
        )
    };
}


// export default App;