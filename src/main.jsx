import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/homepage/homepage.jsx";
import "./stylesheets/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HomePage />
	</React.StrictMode>
);
