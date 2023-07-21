<script>
	import GridLetter from '../components/GridLetter.svelte';
	import { attemptedWords as attemptedWordsState, makeAttempt } from '../states/game-state';
	import { keysList } from './VirtualKeyboard/keysList';

	export let wordLength = 5;

	let attemptQuantity = 0;

	/** @type {HTMLElement} */
	let rootElement;

	/**@type {AttemptedWord[]} */
	let attemptedWords;

	attemptedWordsState.subscribe((words) => {
		attemptedWords = words;
	});

	$: rootElement && rootElement.style.setProperty('--word-length', String(wordLength));

	const handleKeyPress = (event) => {
		const pressedKey = event.key;

		if (pressedKey === 'Enter') {
			const word = attemptedWords[attemptQuantity].map(({ letter }) => letter).join();
			makeAttempt(word, '');
		}

		// attemptQuantity += 1;
	};
</script>

<svelte:window on:keydown|preventDefault={handleKeyPress} />

<!-- Quanto termina a palavra e da enter => makeAttempt -->
<div bind:this={rootElement} class={`grid-cols-letters grid grid-flow-row gap-1`}>
	{#each attemptedWords as word}
		{#each word as { letter, state }}
			<GridLetter {letter} {state} />
		{/each}
	{/each}
</div>

<style lang="postcss">
	.grid-cols-letters {
		grid-template-columns: repeat(var(--word-length), minmax(0, 1fr));
	}
</style>
