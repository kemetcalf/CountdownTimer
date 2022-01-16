import React, { useState } from "react";
import "./App.css";
import Timer from "./Timer";
import TimerList from "./TimerList";
import Header from "./Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import MyForm from "./Form.js";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

const defaultEndDate = new Date(2022, 11, 31, 23, 59, 59, 0).getTime();

function App() {
  const [endDate, setEndDate] = useState(defaultEndDate);
  console.log(endDate);

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Header />
      <Timer enddate={endDate} />
      <MyForm dateInput={setEndDate} />
    </Stack>
  );
}

export default App;
