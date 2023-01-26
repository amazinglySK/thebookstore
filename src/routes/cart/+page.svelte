<script>
	import Navbar from '../../components/Navbar.svelte';
	import CartCard from '../../components/CartCard.svelte';
    import {cart} from "../../stores/cart"

    let cartItems;

    cart.subscribe((val) => {
        cartItems = val
    })
	function handleRemove(event) {
        cart.update((prev) => {
            prev.splice(event.detail.idx, 1)
            return prev
        })
	}

    function handleQtyChange(event) {
        cart.update((prev) => {
            prev[event.detail.idx].qty = event.detail.qty
            return prev
        })
    }
    
    $: total = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

</script>

<Navbar />
<main>
	<div class="cart-container">
        {#if cartItems.length == 0}
            <p>Your cart is empty</p>
        {/if}
		{#each cartItems as v, idx}
			<CartCard
				img={v.img}
				name={v.name}
				price={v.price}
				{idx}
				bind:value={v.qty}
				on:remove={handleRemove}
                on:qtychange = {handleQtyChange}
			/>
		{/each}
	</div>
	<div class="bill">
		<h1>TOTAL</h1>
		<h1>AED {total}</h1>
		<button>RESERVE</button>
	</div>
</main>

<style>
	main {
		width: 94%;
		margin: 2rem auto;
		gap: 2rem;
		display: flex;
	}

	.bill {
		height: 400px;
		width: 30%;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		background-color: aliceblue;
	}

	.bill > button {
		width: max-content;
	}

	.cart-container {
		padding: 2rem;
		height: max-content;
		background-color: #e7e7e7;
		width: 70%;
		border-radius: 10px;
	}
</style>
