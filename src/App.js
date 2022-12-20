import "./App.css";
import Dropdown from "./component/Dropdown";

function App() {
	
	// These items would be displayed in the dropdown menu
	const options = ["Yes", "No","Probably not"];

	return (
		<div className="App">
			{/* Question */}
			<h1>Should you use dropdown ?</h1>
			{/* Dropdown Component */}
			{/* options array is send as props to Dropdown component */}
			<Dropdown options = {options}/>
		</div>
	);
}

export default App;
