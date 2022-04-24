import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button, { ButtonSize } from "./components/Button/Button";

function App() {
	return (
		<div className='App'>
			<Button
				label='Button'
				size={ButtonSize.md}
				className='bg-orangedark-300'
			/>
		</div>
	);
}

export default App;
