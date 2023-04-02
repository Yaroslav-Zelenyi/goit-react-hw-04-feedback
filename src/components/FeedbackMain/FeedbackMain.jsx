import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import  Section  from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import css from './FeedbackMain.module.css';

const feedbackStatistics = ['good', 'neutral', 'bad'];

export default function FeedbackMain() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(prevState => prevState + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(prevState => prevState + 1);
  };

  const handleBadClick = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? '0' : Math.round((good / total) * 100).toString();
  };

  return (
    <div className={css.main}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackStatistics}
          onLeaveFeedback={option => {
            switch (option) {
              case 'good':
                return handleGoodClick();
              case 'neutral':
                return handleNeutralClick();
              case 'bad':
                return handleBadClick();
              default:
                return;
            }
          }}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
