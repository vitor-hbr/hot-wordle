import { writable } from 'svelte/store';
import { validateAttempt } from '../api/word.service';
/**
 * @type {GameState}
 */
const initialGameState = 'playing';

const NUMBER_OF_LETTERS = 5
const NUMBER_OF_ATTEMPTS = 6

const createInitialAttemptedWords = () => {
	/** @type {AttemptedWord[]} */
	const attemptedWords = []

	for(let wordIndex = 0;  wordIndex < NUMBER_OF_ATTEMPTS; wordIndex++ ) {
		attemptedWords.push([])
		
		for(let letterIndex = 0; letterIndex < NUMBER_OF_LETTERS; letterIndex++) {
			attemptedWords[wordIndex].push({
				letter: ' ',
				state: 'pending'
			});
		}
	}

	return attemptedWords
}



/**
 * @type {AttemptedWord[]}
 */
const initialAttemptedWords = createInitialAttemptedWords()

export const gameState = writable(initialGameState);

export const attemptedWords = writable(initialAttemptedWords);

/**
 * @param {string} encryptedWord - The fixed hidden word.
 * @param {string} attempt - The attempt made by the player.
 */
export async function makeAttempt(encryptedWord, attempt) {
	await validateAttempt(encryptedWord, attempt);
}

/**
 * Check if the player has won the game.
 * @param {AttemptedWord} attempt - The fixed hidden word.
 * @returns {boolean} - True if the player has guessed the hidden word, otherwise false.
 */
export function checkWin(attempt) {
	let allLettersAreCorrect = true;

	attempt.forEach((letter) => {
		if (letter.state !== 'correct') allLettersAreCorrect = false;
	});

	return allLettersAreCorrect;
}
