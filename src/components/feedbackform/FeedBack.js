import React, { Component }  from "react";
import css from './FeedBack.module.css';
import PropTypes from 'prop-types';



class FeedBack extends Component {
    
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number
    }

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
    };
///-----как передать в state измененное значение -  3 функции? 
    handleIncrement = evt => {
        // this.setState(prevState =>
        //     {prevState.target +=1});
        console.log("Increment button was clicked!", evt); 
    console.log("this.props: ", this.props);
    console.log('evt.currentTarget: ', evt.currentTarget);

    }
///-------------------------------
    render () {
        return (<div className={css.feedbackBlock}>
                    <p className={css.title}>Please leave feedback</p>

                    <div className={css.buttonsList}>
                        <button type="button"
                                onClick={this.handleIncrement}
                        >good
                        </button>
                        <button type="button"
                                onClick={this.handleIncrement}
                        >neutral
                        </button>
                        <button type="button"
                                onClick={this.handleIncrement}
                        >bad
                        </button>
                    </div>

                    <h1 className={css.title}>Statistics</h1>
                    <ul className={css.statistics}>
                        <li>
                            <h2 className={css.statItem}>Good: {this.state.good}</h2>
                        </li>    
                        <li>
                            <h2 className={css.statItem}>Neutral: {this.state.neutral}</h2>
                        </li>
                        <li>
                            <h2 className={css.statItem}>Bad: {this.state.bad}</h2>
                        </li>            
                    </ul>



                </div>
        )
    }

}

export default FeedBack;