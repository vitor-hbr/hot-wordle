import { writable } from 'svelte/store';
import { validateAttempt } from '../api/word.service';
/**
 * @type {GameState}
 */
const initialGameState = 'playing';

/**
 * @type {AttemptedWord[]}
 */
const initialAttemptedWords = [];

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
