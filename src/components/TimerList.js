import React from "react";
import Stack from "react-bootstrap/Stack";
import TimerCard from "./TimerCard";

const TimerList = (props) => {
  // console.log(props);

  const deleteTimerHandler = (id) => {
    props.getTimerId(id);
  };

  const renderTimerList = props.savedTimers.map((timerEvent) => {
    return (
      <TimerCard
        savedTimer={timerEvent}
        clickHandler={deleteTimerHandler}
      ></TimerCard>
    );
  });

  return <Stack style={{ textAlign: "left" }}>{renderTimerList}</Stack>;
};

export default TimerList;
