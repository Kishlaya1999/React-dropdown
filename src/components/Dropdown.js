import React, { useState } from "react";

// Destructuring the props comming from parent component i.e App.js
function Dropdown({ options }) {
	// State that shows the selected options
	const [selected, setSelected] = useState("");
	// State that shows and hides the dropdown (if false then not displayed if true then displayed)
	const [display, setDisplay] = useState(false);

	// Function which changes the "selected" state according to the user selection and also hides the dropdown menu once user had selected the list item
	const showSelectedOption = (e) => {
          // setting the state equivalent to the selected item by user
		setSelected(e.target.innerText);
          // After the item is selected then we hide the dropdown menu
		setDisplay(false);
	};

	// menuItems variable contain the list of items within li tag and also with appropriate click handler
	let menuItems = options.map((item) => {
		return <li onClick={showSelectedOption}>{item}</li>;
	});
	// menuItems will look something like this
	// menuItems = "<li onClick={showSelectedOption}>Yes</li><li onClick={showSelectedOption}>No</li><li onClick={showSelectedOption}>Probably No</li>"

	return (
		<div className="dropdown">
               {/* Dropdown box */}
               {/* on mouse hover we set the display of dropdown items as true */}
			<div onMouseEnter={() => setDisplay(true)} className="dropdown-menu">
				<span>Select an option</span>
				<i className="fa-solid fa-caret-down"></i>
			</div>

               {/* Dropdown items which is displayed only when display is true */}
               {/* Items are comming from the parent components as props */}
			{display ? <ul className="menu-items">{menuItems}</ul> : ""}

               {/* For the first time when the user enters the site then selected is black so noting is displayed */}
			{selected !== "" ? <h3 className="select-option">Selected Option : {selected}</h3> : ""}
		</div>
	);
}

export default Dropdown;