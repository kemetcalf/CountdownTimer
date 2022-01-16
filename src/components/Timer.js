import React from "react";
import { useState, useEffect } from "react";
import Stack from "react-bootstrap/Stack";

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

function Timer(props) {
  //hooks to update msDateNow state every second
  const [msDateNow, setMsDateNow] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setMsDateNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dateFromForm = props.enddate;
  const msEndDate = new Date(dateFromForm);
  // console.log("poop");
  // console.log(dateFromForm); //making sure the info passes
  const msRemaining = msEndDate - msDateNow;

  // console.log(msEndDate);
  // console.log(msRemaining);

  const currentDate = new Date(); //for display purposes only

  return (
    <Stack>
      <h3>Today is</h3>
      <p>
        {currentDate.toLocaleString("en-US", {
          hour12: true,
          timeZoneName: "short",
        })}
      </p>
      <h3>It is currently</h3>
      <p>{dhmsRemaining(msRemaining)}</p>
      <h3>until 'event'</h3>
      {/*TODO: pass event name to variable in text above; Also, clear the fields
      after input */}
    </Stack>
  );
}

export default Timer;
