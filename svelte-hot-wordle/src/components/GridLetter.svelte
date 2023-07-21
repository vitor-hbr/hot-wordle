<script>
	import clsx from 'clsx';

	/** @type {string} */
	export let letter;
	/** @type {LetterState} */
	export let state = 'pending';
</script>

<div
	class={clsx([
		'flex aspect-square items-center justify-center rounded border-4 text-4xl font-bold text-white',
		state === 'pending' && 'border-none bg-gray-500',
		state === 'selected' && 'border-b-8',
		state === 'otherPosition' && 'bg-yellow-500',
		state === 'correct' && 'bg-green-500'
	])}
>
	{letter}
</div>
