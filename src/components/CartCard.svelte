<script>
	import { createEventDispatcher } from 'svelte';

	export let name;
	export let value;
	export let price;
	export let img;
	export let idx;

	const dispatch = createEventDispatcher();

	function sendRemoveEvent() {
		console.log('Event sent');
		dispatch('remove', {
			idx: idx
		});
	}

	function sendQtyChangeEvent() {
		console.log('Event sent');
		dispatch('qtychange', {
			idx: idx,
			qty: value
		});
	}
</script>

<div class="cart-card">
	<div class="photo">
		<img src={img} alt="" />
	</div>
	<div class="content">
		<h1>{name}</h1>
		<div class="prod-info">
			<span class="price">AED {price}</span>
			<div class="qty-group">
				<label for="qty">Qty</label><input
					type="number"
					name="qty"
					id="qty"
					class="qty"
					bind:value
					on:change={sendQtyChangeEvent}
				/>
			</div>
		</div>
		<button class="remove" on:click={sendRemoveEvent}> Remove </button>
	</div>
</div>

<style>
	.cart-card {
		background-color: #c2c2c2;
		padding: 2rem;
		border-radius: 10px;
		display: flex;
		gap: 1rem;
		margin: auto;
		margin-top: 2rem;
	}

	.content {
		font-size: 1.25em;
		padding: 10px;
		width: 100%;
		padding-left: 30px;
		box-sizing: border-box;
	}

	.price {
		font-size: 2rem;
	}

	.qty-group {
		display: flex;
		gap: 2rem;
		margin-top: 10%;
	}

	.qty {
		height: 1rem;
		width: 3rem;
	}

	button {
		width: 6rem;
		border-radius: 3em;
		background-color: rgb(60, 60, 60);
		color: white;
		margin-top: 5%;
		padding: 1em 1.5em;
		border: none;
		font-family: Josefin Sans, Verdana, sans-serif;
	}
</style>
