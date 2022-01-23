import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import TimerList from "./TimerList";
import Header from "./Header.js";
import "./src/custom.scss";
import Stack from "react-bootstrap/Stack";
import AddTimer from "./Form.js";

//reminder that icons can be imported here and accessed in all children

function App() {
  const LOCAL_STORAGE_KEY = "savedTimers";
  const [savedTimers, setSavedTimers] = useState([]);
  // console.log(savedTimers);

  const addTimerHandler = (timerEvent) => {
    // console.log(timerEvent);
    const newTimer = { id: v4(), ...timerEvent };
    setSavedTimers([...savedTimers, newTimer]);
  };

  const removeTimerHandler = (id) => {
    const newTimerList = savedTimers.filter((timerEvent) => {
      return timerEvent.id !== id;
    });

    setSavedTimers(newTimerList);
  };

  useEffect(() => {
    const retrieveSavedTimers = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveSavedTimers) setSavedTimers(retrieveSavedTimers);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedTimers));
  }, [savedTimers]);

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <div></div>
      <Header />
      <AddTimer addTimerHandler={addTimerHandler} />
      <TimerList savedTimers={savedTimers} getTimerId={removeTimerHandler} />
    </Stack>
  );
}

export default App;
