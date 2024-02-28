import "../Styles/CountdownTimer.css";
import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeComponents = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section id="countdownTimer" className="countdownTimer">
      <h1 data-aos="fade-down" data-aos-duration="1500">
        Countdown Timer
      </h1>
      <main data-aos="fade-up" data-aos-duration="1500">
        {timeComponents.map((component, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <h5 className="m-0 p-0">
              {component.value < 10 ? `0${component.value}` : component.value}
            </h5>
            <span className="m-0 p-0">{component.label}</span>
          </div>
        ))}
      </main>
    </section>
  );
};

export default CountdownTimer;
