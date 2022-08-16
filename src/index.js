import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
// import "./components/src/custom.scss";
import App from "./components/App";

ReactDOM.render(
	<React.StrictMode>
		<App className="row justify-content-center" />
	</React.StrictMode>,
	document.getElementById("root")
);
