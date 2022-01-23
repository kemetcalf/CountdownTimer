import React from "react";
import Stack from "react-bootstrap/Stack";
import TimerCard from "./TimerCard";

const TimerList = (props) => {
  const deleteTimerHandler = (id) => {
    props.getTimerId(id);
  };

  const sortedTimers = props.savedTimers.sort(function (a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  const renderTimerList = sortedTimers.map((timerEvent) => {
    return (
      <TimerCard
        key={timerEvent.id}
        savedTimer={timerEvent}
        clickHandler={deleteTimerHandler}
      ></TimerCard>
    );
  });

  return <Stack style={{ textAlign: "left" }}>{renderTimerList}</Stack>;
};

export default TimerList;
