import Feedback from './Feedback/Feedback';
import { useState } from 'react';

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = event => {
        switch (event.target.name) {
            case 'good':
                setGood(prev => prev + 1);
                break;
            case 'neutral':
                setNeutral(prev => prev + 1);
                break;
            case 'bad':
                setBad(prev => prev + 1);
                break;
            default:
                return console.error(`Unexpected feedback - ${event.target.name}`);
        };
    };

    const countTotalFeedback = () => Object.values({ good, neutral, bad }).reduce((total, next) => total + next, 0);

    const countPositiveFeedbackPercentage = () => {
        const positivePercentage = Math.round(good * 100 / countTotalFeedback());
        return !positivePercentage ? 0 : positivePercentage;
    };

    return (
        <Feedback
            state={{ good, neutral, bad }}
            onLeaveFeedback={onLeaveFeedback}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
    );
}