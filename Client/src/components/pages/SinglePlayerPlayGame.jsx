import React, { useState, useEffect } from "react";
import Maskedtext from "../MaskedText/MaskedText";
import LetterButtons from "../LetterButtons/LetterButtons";
import HangMan from "../HangMan/HangMan";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import useWordStore from "../stores/WordStore";

function SinglePlayerPlayGame() {
    const { wordList, word, hint } = useWordStore(); // Access hint from the store
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const [buttonsDisabled, setButtonsDisabled] = useState(false); // Track button state

    // Effect to handle game over condition
    useEffect(() => {
        if (step >= 7) {
            toast.error("Game Over! You've reached the maximum number of incorrect guesses.");
            setButtonsDisabled(true); // Disable buttons on game over
        }
    }, [step]);

    // Effect to check if all letters are guessed
    useEffect(() => {
        if (word) {
            const wordArray = word.toUpperCase().split("");
            const allGuessed = wordArray.every((letter) => guessedLetters.includes(letter));
            if (allGuessed) {
                toast.success("Congratulations! You've guessed the word.");
                setButtonsDisabled(true); // Disable buttons on word guessed
            }
        }
    }, [guessedLetters, word]);

    function handleLetterClick(letter) {
        if (!buttonsDisabled) { // Prevent action if buttons are disabled
            if (word.toUpperCase().includes(letter)) {
                console.log("Correct");
            } else {
                console.log("Wrong");
                setStep((prevStep) => prevStep + 1); // Increment step for wrong guess
            }
            setGuessedLetters((prevLetters) => [...prevLetters, letter]); // Add guessed letter to state
        }
    }

    if (!wordList || wordList.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
                <p className="text-xl font-bold">Loading words...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
            <h1 className="text-5xl font-extrabold text-center mb-8 drop-shadow-md">
                Single Player Game
            </h1>

            {/* Styled Hint Display */}
            <h3 className="text-2xl font-bold text-center mb-6 text-white drop-shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-6 rounded-lg shadow-md">
                {hint ? `Hint: ${hint}` : "Loading hint..."}
            </h3>

            <div className="flex flex-wrap w-full max-w-5xl mx-auto">
                <div className="flex-1 flex flex-col items-start p-4">
                    <Maskedtext text={word} guessedLetters={guessedLetters} />
                    <LetterButtons
                        text={word}
                        guessedLetters={guessedLetters}
                        onLetterClick={handleLetterClick}
                        disabled={buttonsDisabled} // Pass down the disabled prop
                    />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                    <HangMan step={step} />
                </div>
            </div>
            

            <Link
                to="/"
                className="text-lg font-bold underline text-blue-300 hover:text-blue-200 transition duration-200 ease-in-out mt-8"
            >
                Go Back to Home
            </Link>

            <ToastContainer />
        </div>
    );
}

export default SinglePlayerPlayGame;
