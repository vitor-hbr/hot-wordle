<script>
	import Key from './Key.svelte';

	const keys = [
		{
			name: 'q',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'q' }));
			}
		},
		{
			name: 'w',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'w' }));
			}
		},
		{
			name: 'e',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'e' }));
			}
		},
		{
			name: 'r',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'r' }));
			}
		},
		{
			name: 't',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 't' }));
			}
		},
		{
			name: 'y',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'y' }));
			}
		},
		{
			name: 'u',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'u' }));
			}
		},
		{
			name: 'i',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'i' }));
			}
		},
		{
			name: 'o',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'o' }));
			}
		},
		{
			name: 'p',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'p' }));
			}
		},
		{
			name: 'a',
			classes: 'col-start-2',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
			}
		},
		{
			name: 's',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 's' }));
			}
		},
		{
			name: 'd',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'd' }));
			}
		},
		{
			name: 'f',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'f' }));
			}
		},
		{
			name: 'g',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'g' }));
			}
		},
		{
			name: 'h',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'h' }));
			}
		},
		{
			name: 'j',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'j' }));
			}
		},
		{
			name: 'k',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k' }));
			}
		},
		{
			name: 'l',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'l' }));
			}
		},
		{
			name: 'backspace',
			classes: 'w-[105px]',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace' }));
			}
		},
		{
			name: 'z',
			classes: 'col-start-4',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'z' }));
			}
		},
		{
			name: 'x',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'x' }));
			}
		},
		{
			name: 'c',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'c' }));
			}
		},
		{
			name: 'v',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'v' }));
			}
		},
		{
			name: 'b',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'b' }));
			}
		},
		{
			name: 'n',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'n' }));
			}
		},
		{
			name: 'm',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'm' }));
			}
		},
		{
			name: 'enter',
			classes: 'w-28',
			onClick: () => {
				window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
			}
		}
	];

	/** @param {any} event */
	function onKeyDown(event) {
		const pressedKey = event.key;

		const matchedKey = keys.find((key) => key.name === pressedKey.toLowerCase());

		console.log('pressed key =>', matchedKey?.name);
	}
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div class="grid-cols-21 grid w-[550px] grid-rows-3 gap-2 bg-transparent">
	{#each keys as key}
		<Key name={key.name} classes={key.classes} handleClick={key.onClick} />
	{/each}
</div>
