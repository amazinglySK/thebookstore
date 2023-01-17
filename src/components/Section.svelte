<script>
	export let title;
	export let iterable;
	export let img;

	import Card from './Card.svelte';

	console.log(iterable);
</script>

<div class="container">
	<h2>{title}</h2>
	<div class="sub">
		{#each iterable as _, index (index)}
			<Card {img} item={'Register'} status={'IN STOCK'} />
		{/each}
	</div>
</div>

<style>
	.container {
		margin-left: 3rem;
		margin-top: 3em;
	}

	.sub {
		gap: 4rem;
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;
	}

	.sub::-webkit-scrollbar {
		display: none;
	}
</style>
