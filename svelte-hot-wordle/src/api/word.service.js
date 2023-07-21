/**
 * @typedef {Object} AttemptedWordDTO
 * @property {string} letter
 * @property {'pending' | 'selected' | 'correct' | 'otherPosition'} state
 */

/**
 * @param {string} encryptedWord - The fixed hidden word.
 * @param {string} attempt - The attempt made by the player.
 * * @returns {Promise<boolean>} - True if the player has guessed the hidden word, otherwise false.
 */
export async function validateAttempt(encryptedWord, attempt) {
	return true;
}
