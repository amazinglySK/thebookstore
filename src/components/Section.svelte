<script>
	export let title;
	export let iterable;
	export let img;
    export let mock;

	import Card from './Card.svelte';
	
</script>

<div class="container">
	<h2>{title}</h2>
	<div class="sub">
        {#if mock}
            {#each iterable as _, index (index)}
            <Card {img} item={"Sample"} status={'IN STOCK'} />
            {/each}
        {:else}
            {#each iterable as v, _}
                <Card img = {v.img} item={v.name} status={v.in_stock ? 'IN STOCK' : 'OUT OF STOCK'} />
            {/each}
        {/if}
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
