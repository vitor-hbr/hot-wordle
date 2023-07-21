<script>
	import Key from './Key.svelte';
	import { keysList } from './keysList';

	/** @param {any} event */
	function onKeyDown(event) {
		const pressedKey = event.key;

		const matchedKey = keysList.find((key) => key.name === pressedKey.toLowerCase());

		console.log('pressed key =>', matchedKey?.name);
	}
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div class="grid-cols-21 grid w-[550px] grid-rows-3 gap-2 bg-transparent">
	{#each keysList as key}
		<Key name={key.name} classes={key.classes} handleClick={key.onClick} />
	{/each}
</div>
