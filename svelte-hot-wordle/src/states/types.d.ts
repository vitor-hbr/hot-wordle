/**
 * @typedef {Object} LetterState
 * @type {'pending' | 'selected' | 'correct' | 'otherPosition' | 'incorrect'}
 */
type LetterState = 'pending' | 'selected' | 'correct' | 'otherPosition' | 'incorrect';

/**
 * @typedef {Object} AttemptedLetter
 * @property {string} letter
 * @property {LetterState} state
 */
type AttemptedLetter = {
	letter: string;
	state: LetterState;
};

/**
 * @typedef {Object} AttemptedWord
 * @type {AttemptedLetter[]}
 */
type AttemptedWord = AttemptedLetter[];

/**
 * @type {'playing' | 'lost'| 'won'}
 */
type GameState = 'playing' | 'lost' | 'won';
