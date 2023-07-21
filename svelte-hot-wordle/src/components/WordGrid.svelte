<script>
	import GridLetter from '../components/GridLetter.svelte';

	export let wordLength = 5;
	export let letterMatrix = [
		['A', 'B', 'C', 'D', 'E'],
		['F', 'G', 'H', 'I', 'J'],
		['K', 'L', 'M', 'N', 'O'],
		['P', 'Q', 'R', 'S', 'T'],
		['U', 'V', 'W', 'X', 'Y'],
		['Z', 'Z', 'Z', 'Z', 'Z']
	];

	/** @type {HTMLElement} */
	let rootElement;

	$: rootElement && rootElement.style.setProperty('--word-length', String(wordLength));
</script>

<div bind:this={rootElement} class={`grid-cols-letters grid grid-flow-row gap-1`}>
	{#each letterMatrix as row}
		{#each row as letter}
			<GridLetter {letter} />
		{/each}
	{/each}
</div>

<style lang="postcss">
	.grid-cols-letters {
		grid-template-columns: repeat(var(--word-length), minmax(0, 1fr));
	}
</style>
