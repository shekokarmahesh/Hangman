const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButtons({ text, guessedLetters, onLetterClick , disabled}) {

    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = function(letter) {
        if (guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
        } else {
            return disabled ? 'bg-gray-500 cursor-not-allowed' : '';
        }
    }

    function handleLetterClick(event) {
        const characterOfTheLetter = event.target.value;
        console.log("This is the letter clicked",characterOfTheLetter);
        onLetterClick?.(characterOfTheLetter);
    }

    return (
        <div className="space-y-2 p-4">
            <div className="flex justify-start space-x-1">
                {ALPHABETS.slice(0, 10).map(letter => (
                    <button
                        key={`button-${letter}`}
                        value={letter}
                        onClick={handleLetterClick}
                        disabled={guessedLettersSet.has(letter) || disabled} // Disable if guessed or buttons are disabled
                        className={`h-12 w-12 m-1 text-white font-semibold rounded-md shadow-md ${buttonStyle(letter)} transition duration-200 ease-in-out`}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <div className="flex justify-start space-x-1 pl-6">
                {ALPHABETS.slice(10, 19).map(letter => (
                    <button
                        key={`button-${letter}`}
                        value={letter}
                        onClick={handleLetterClick}
                        disabled={guessedLettersSet.has(letter) || disabled} // Disable if guessed or buttons are disabled
                        className={`h-12 w-12 m-1 text-white font-semibold rounded-md shadow-md ${buttonStyle(letter)} transition duration-200 ease-in-out`}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <div className="flex justify-start space-x-1 pl-12">
                {ALPHABETS.slice(19).map(letter => (
                    <button
                        key={`button-${letter}`}
                        value={letter}
                        onClick={handleLetterClick}
                        disabled={guessedLettersSet.has(letter) || disabled} // Disable if guessed or buttons are disabled
                        className={`h-12 w-12 m-1 text-white font-semibold rounded-md shadow-md ${buttonStyle(letter)} transition duration-200 ease-in-out`}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default LetterButtons;

