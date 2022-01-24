import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import TimerCard from "./TimerCard";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const TimerList = (props) => {
  // toggle button functionality
  const [toggleState, setToggleState] = useState(1);
  const handleChange = (toggleposition) => setToggleState(toggleposition);
  console.log(toggleState);

  const deleteTimerHandler = (id) => {
    props.getTimerId(id);
  };

  const sortedTimers = props.savedTimers.sort(function (a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return toggleState === 1
      ? dateA.getTime() - dateB.getTime()
      : dateB.getTime() - dateA.getTime();
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

  return (
    <Stack style={{ textAlign: "left" }}>
      <ToggleButtonGroup
        type="radio"
        name="sort"
        value={toggleState}
        onChange={handleChange}
        variant="color"
      >
        <ToggleButton id="sort-up" value={1}>
          <i className="bi bi-arrow-up"></i>
        </ToggleButton>
        <ToggleButton id="sort-down" value={2}>
          <i className="bi bi-arrow-down"></i>
        </ToggleButton>
      </ToggleButtonGroup>

      {renderTimerList}
    </Stack>
  );
};

export default TimerList;
