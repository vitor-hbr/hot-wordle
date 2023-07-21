<script>
	import clsx from 'clsx';

	/** @type {string} */
	export let letter;
	/** @type {boolean} */
	export let isActive = false;
</script>

<div
	class={clsx([
		'flex aspect-square items-center justify-center rounded border-4 text-4xl font-bold text-white',
		isActive && 'border-b-8'
	])}
>
	{letter}
</div>
