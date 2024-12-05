import { create } from 'zustand';

// Create a Zustand store
const useWordStore = create((set) => ({
    wordList: [],
    word: '',
    hint: '', // Add hint property to the store

    // Method to set the word list
    setWordList: (list) => {
        set((state) => {
            console.log("state printing", state);
            return {
                ...state,
                wordList: list,
            };
        });
    },

    // Method to set the selected word
    setWord: (newWord) => {
        set((state) => {
            return {
                ...state,
                word: newWord,
            };
        });
    },

    // Method to set the hint dynamically
    setHint: (newHint) => {
        set((state) => {
            return {
                ...state,
                hint: newHint, // Update the hint property
            };
        });
    },
}));

export default useWordStore;
