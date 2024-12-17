import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
    const [inputType, setInputType] = useState("password");
    const [inputType2, setInputType2] = useState("password"); // Set default to "password"
    const [inputValue, setInputValue] = useState(""); // Value for input box 1
    const [inputValue2, setInputValue2] = useState(""); // Value for input box 2 (hint)
    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted", inputValue, inputValue2);
        if (inputValue) {
            navigate("/play", { state: { wordSelected: inputValue, hint: inputValue2 } });
        }
    }

    function handleTextInputChange(event) {
        console.log("Text input 1 changed:", event.target.value);
        setInputValue(event.target.value);
    }

    function handleHintInputChange(event) {
        console.log("Text input 2 (hint) changed:", event.target.value);
        setInputValue2(event.target.value);
    }

    function handleShowHideClick() {
        console.log("Show/hide button clicked");
        // Toggle both inputType and inputType2
        const newType = inputType === "password" ? "text" : "password";
        setInputType(newType);
        setInputType2(newType);
    }

    return (
        <TextInputForm
            inputType={inputType} // Pass down inputType for input 1
            inputType2={inputType2} // Pass down inputType2 for input 2
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange} // For input 1
            handleHintInputChange={handleHintInputChange} // For input 2
            handleShowHideClick={handleShowHideClick} // Pass down handleShowHideClick
        />
    );
}

export default TextInputFormContainer;
