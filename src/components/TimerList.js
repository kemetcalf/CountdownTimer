//this file is a spot to keep track of saved countdown timers, a la the list from the contact manager
import React from "react";
import Stack from "react-bootstrap/Stack";
import TimerCard from "./TimerCard";

const TimerList = (props) => {
  console.log(props);

  const renderTimerList = props.savedTimers.map((savedTimers) => {
    return <TimerCard savedTimers={savedTimers}></TimerCard>;
  });

  return (
    <Stack style={{ textAlign: "left" }}>
      <h6>{renderTimerList}</h6>
    </Stack>
  );
};

export default TimerList;
