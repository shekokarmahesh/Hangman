import { Link, useLocation } from "react-router-dom";
import LetterButtons from "../LetterButtons/LetterButtons";
import Maskedtext from "../MaskedText/MaskedText";
import { useState, useEffect } from "react";
import HangMan from "../HangMan/HangMan";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function PlayGame() {
    const { state } = useLocation();
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const [buttonsDisabled, setButtonsDisabled] = useState(false); // Track button disable state

    // Effect to handle game over condition
    useEffect(() => {
        if (step >= 7) {
            toast.error("Game Over! You've reached the maximum number of incorrect guesses.");
            setButtonsDisabled(true); // Disable buttons on game over
        }
    }, [step]);

    // Effect to check if all letters are guessed
    useEffect(() => {
        if (state.wordSelected) {
            const wordArray = state.wordSelected.toUpperCase().split("");
            const allGuessed = wordArray.every(letter => guessedLetters.includes(letter));
            if (allGuessed) {
                toast.success("Congratulations! You've guessed the word.");
                setButtonsDisabled(true); // Disable buttons on word guessed
            }
        }
    }, [guessedLetters, state.wordSelected]);

    function handleLetterClick(letter) {
        if (!buttonsDisabled) { // Prevent action if buttons are disabled
            if (state.wordSelected.toUpperCase().includes(letter)) {
                console.log("Correct");
            } else {
                console.log("Wrong");
                setStep(prevStep => prevStep + 1); // Increment step for wrong guess
            }
            setGuessedLetters(prevLetters => [...prevLetters, letter]); // Add guessed letter to state
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
            <h1 className="text-5xl font-extrabold text-center mb-8 drop-shadow-md">
                Play Game
            </h1>

            {/* Styled Hint Display */}
            <h3 className="text-2xl font-bold text-center mb-6 text-white drop-shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-6 rounded-lg shadow-md">
                Hint: {state.hint}
            </h3>

            <div className="flex flex-wrap w-full max-w-5xl mx-auto">
                <div className="flex-1 flex flex-col items-start p-4">
                    <Maskedtext text={state.wordSelected} guessedLetters={guessedLetters} />
                    <LetterButtons 
                        text={state.wordSelected} 
                        guessedLetters={guessedLetters} 
                        onLetterClick={handleLetterClick} 
                        disabled={buttonsDisabled} // Pass down the disabled prop
                    />
                </div>

                <div className="flex-1 flex items-center justify-center p-4">
                    <HangMan step={step} />
                </div>
            </div>
            <div className="w-full flex justify-between items-center mt-8">
    <Link 
        to="/start" 
        className="text-lg font-bold underline text-blue-300 hover:text-blue-200 transition duration-200 ease-in-out"
    >
        Start New Game
    </Link>
    <Link
        to="/"
        className="text-lg font-bold underline text-blue-300 hover:text-blue-200 transition duration-200 ease-in-out"
    >
        Go Back to Home
    </Link>
</div>


            <ToastContainer />
        </div>
    );
}

export default PlayGame;
