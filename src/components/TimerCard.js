import React, { useState, useEffect } from "react";
import { Card, Stack } from "react-bootstrap";

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

  return d + "d: " + h + "h: " + m + "m: " + s + "s";
};

const TimerCard = (props) => {
  // eslint-disable-next-line
  const { id, event, date, icon, color } = props.savedTimer;

  //hooks to update msDateNow state every second
  const [msDateNow, setMsDateNow] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setMsDateNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dateFromForm = date;
  const msEndDate = new Date(dateFromForm);
  const msRemaining = msEndDate - msDateNow;

  let clockStatus;
  if (msRemaining > 0) {
    clockStatus = dhmsRemaining(msRemaining);
  } else {
    clockStatus = (
      <div>
        {" "}
        <i className="bi bi-alarm-fill" style={{ color: "limegreen" }}></i> The
        Time has come!
      </div>
    );
  }
  // console.log(msRemaining);

  const dateObject = new Date(date);
  const readableDate = dateObject.toDateString();

  return (
    // console.log(msRemaining),
    // console.log(dhmsRemaining(msRemaining)),
    <Card>
      <Card.Body>
        <Stack gap={4}>
          <div id="event-input">
            <Stack direction="horizontal" gap={3}>
              <h3>
                <i className={icon} color={color}></i>
                {/* <i className="bi bi-stars" style={{ color: "#f7df0e" }}></i> */}
                {event}
              </h3>
              <h6 className="ms-auto">{clockStatus}</h6>
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <div>{readableDate}</div>
              <i
                className="bi bi-trash ms-auto"
                style={{ color: "red" }}
                onClick={() => props.clickHandler(id)}
              ></i>
            </Stack>
          </div>
          <div></div>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default TimerCard;
