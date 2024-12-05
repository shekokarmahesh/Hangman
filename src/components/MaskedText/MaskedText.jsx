import { getMaskedString } from "./MaskingUtility";

function Maskedtext({ text, guessedLetters }) {
    const maskedString = getMaskedString(text, guessedLetters);

    return (
        <div className="flex justify-left space-x-2 mt-6 mb-8 p-4 text-3xl font-mono font-semibold text-gray-800">
            {maskedString.map((letter, index) => (
                <span
                    key={index}
                    className={`inline-block w-8 h-12 text-center ${
                            letter === "_ " ? "w-2" : "w-8"
                    }`}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
}

export default Maskedtext;


