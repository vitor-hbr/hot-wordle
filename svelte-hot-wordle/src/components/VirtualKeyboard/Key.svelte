<script>
	/** @type {string} */
	export let name;

	/** @type {string} */
	export let classes = '';

	/** @type {function} */
	export let handleClick;
</script>

<div
	class={`col-span-2 flex h-9 w-11 items-center justify-center rounded bg-white ${classes} cursor-pointer`}
	on:click={handleClick}
>
	<p class="text-outsmart-purple font-bold capitalize">{name}</p>
</div>
