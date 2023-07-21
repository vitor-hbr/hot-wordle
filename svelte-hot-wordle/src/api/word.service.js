const apiBaseUrl = 'https://....';

/**
 * @param {number} numberOfLetters - The number of letters for the word.
 * * @returns {Promise<string>} - Returns the encrypted word.
 */
export async function getWord(numberOfLetters) {
	//const res = (await fetch(`${apiBaseUrl}/getWord`)).json()

	return 'teste';
}

/**
 * @param {string} encryptedWord - The fixed hidden word.
 * @param {string} attempt - The attempt made by the player.
 * * @returns {Promise<AttemptedWord>} - True if the player has guessed the hidden word, otherwise false.
 */
export async function validateAttempt(encryptedWord, attempt) {
	//const res = (await fetch(`${apiBaseUrl}/validateAttempt`)).json()

	return [
		{
			letter: 'T',
			state: 'correct'
		},
		{
			letter: 'E',
			state: 'correct'
		},
		{
			letter: 'S',
			state: 'correct'
		},
		{
			letter: 'T',
			state: 'correct'
		},
		{
			letter: 'E',
			state: 'correct'
		}
	];
}
