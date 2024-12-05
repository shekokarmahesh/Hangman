import React from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/button";

function TextInputForm({
    inputType,
    inputType2,
    handleFormSubmit,
    handleTextInputChange,
    handleHintInputChange,
    handleShowHideClick,
}) {
    return (
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleFormSubmit}
                className="flex flex-col items-center p-6 bg-white bg-opacity-80 rounded-lg shadow-lg space-y-4 max-w-md mx-auto"
            >
                <div className="w-full">
                    <TextInput
                        type={inputType} // Dynamic type passed to TextInput
                        label="Enter a word or a phrase"
                        placeholder="Enter a word or phrase here ..."
                        onChangeHandler={handleTextInputChange} // Correct handler for Input Field 1
                        className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                <div className="w-full">
                    <TextInput
                        type={inputType2} // Dynamic type passed to TextInput
                        label="Hint"
                        placeholder="Enter a hint related to the word here..."
                        onChangeHandler={handleHintInputChange} // Correct handler for Input Field 2
                        className="w-full p-3 rounded-md bg-white text-gray-700 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                <div className="w-full flex justify-between">
                    <Button
                        type="button"
                        styleType="warning"
                        text={inputType === "password" ? "Show" : "Hide"}
                        onClickHandler={handleShowHideClick} // Toggle button
                        className="px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md shadow hover:bg-yellow-500 transition duration-200 ease-in-out"
                    />
                    <Button
                        type="submit"
                        styleType="primary"
                        text="Submit"
                        onClickHandler={handleFormSubmit}
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-200 ease-in-out"
                    />
                </div>
            </form>
        </div>
    );
}

export default TextInputForm;
