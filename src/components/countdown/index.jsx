import './style.scss';
import { getCountdownDate, formatCountdown } from '../../helpers/DateHelper';
import React, { useEffect, useState } from 'react';

function Countdown() {
  const date = getCountdownDate();
  const time = '15:37:25';

  const countDownDate = new Date(`${date} ${time}`).getTime();
  const [ countdown, setCountdown ] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      setCountdown(countDownDate - now);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <div> 
      <span> {formatCountdown(countdown)} </span>
    </div>
  )
}

export default Countdown;