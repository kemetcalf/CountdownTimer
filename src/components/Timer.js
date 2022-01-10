import React from "react";
import { useState, useEffect } from "react";

const msPerDay = 24 * 60 * 60 * 1000;
const msPerHour = 60 * 60 * 1000;
const msPerMin = 60 * 1000;
const msPerSec = 1000;

const dhmsRemaining = (msRemaining) => {
  const d = Math.floor(msRemaining / msPerDay);
  const h = Math.floor((msRemaining % msPerDay) / msPerHour);
  const m = Math.floor(((msRemaining % msPerDay) % msPerHour) / msPerMin);
  const s = Math.floor(
    (((msRemaining % msPerDay) % msPerHour) % msPerMin) / msPerSec
  );

  return d + "d:" + h + "h:" + m + "m:" + s + "s";
};

function Timer() {
  //hooks to update msDateNow state every second
  const [msDateNow, setMsDateNow] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setMsDateNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const endDate = new Date(2022, 11, 31, 23, 59, 59, 0);
  const msEndDate = endDate.getTime();
  const msRemaining = msEndDate - msDateNow;

  const currentDate = new Date(); //for display purposes only

  console.log(endDate);
  console.log(msEndDate);
  console.log(msRemaining);

  return (
    <div>
      <h1>Current Date:</h1>
      <p>
        {currentDate.toLocaleString("en-US", {
          hour12: true,
          timeZoneName: "short",
        })}
      </p>
      <p>{dhmsRemaining(msRemaining)}</p>
    </div>
  );
}

export default Timer;
