import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWordStore from "../stores/WordStore"; // Custom store for word and hint state
import Button from "../Button/button";

function HomePage() {
    const { setWordList, setWord, setHint } = useWordStore(); // Extend to setHint in the store

    async function fetchWords() {
        try {
            const response = await fetch("http://localhost:3000/words");
            const data = await response.json();
            console.log(data);

            // Update wordList in the store
            setWordList([...data]);

            // Select a random word and its hint
            const randomIndex = Math.floor(Math.random() * data.length);
            const selectedWord = data[randomIndex];

            console.log("Selected word:", selectedWord.wordValue);
            console.log("Selected hint:", selectedWord.wordHint);

            setWord(selectedWord.wordValue); // Set the word
            setHint(selectedWord.wordHint); // Set the hint
        } catch (error) {
            console.error("Error fetching words:", error);
        }
    }

    useEffect(() => {
        fetchWords(); // Fetch words and hints on component mount
    }, []);

    const navigate = useNavigate();

    function handleClickSinglePlayer() {
        navigate("/singleplayer"); // Navigate to SinglePlayerPlayGame
    }

    function handleClickMultiplayer() {
        navigate("/start"); // Navigate to multiplayer start page
    }

    return (
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="mb-12 text-center text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 text-transparent bg-clip-text drop-shadow-lg tracking-wider uppercase">
                HangMan Game
            </h1>

            <div className="flex flex-col space-y-6 w-full max-w-xs">
                <div className="flex justify-center">
                    <Button
                        onClickHandler={handleClickMultiplayer}
                        styleType="primary"
                        text="Multiplayer Game"
                        className="w-full px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-200 ease-in-out"
                    />
                </div>
                <div className="flex justify-center">
                    <Button
                        onClickHandler={handleClickSinglePlayer}
                        styleType="warning"
                        text="Single Player Game"
                        className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 ease-in-out"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
