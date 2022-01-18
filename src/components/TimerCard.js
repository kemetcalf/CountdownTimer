import React from "react";
import { Stack } from "react-bootstrap";

const TimerCard = (props) => {
  const { id, event, date, icon } = props.savedTimers;

  return (
    <Stack gap={4}>
      <div id="event-input">
        <Stack direction="horizontal" gap={3}>
          <h3>
            <i className="bi bi-stars" style={{ color: "#f7df0e" }}></i>
            {/*  */}
            {event}
          </h3>
          <div>Correlating Countdown Timer</div>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>{date}</div>
          <i className="bi bi-trash ms-auto" style={{ color: "red" }}></i>
        </Stack>
      </div>
      <div></div>
    </Stack>
  );
};

export default TimerCard;
