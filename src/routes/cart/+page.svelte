<script>
	import Navbar from '../../components/Navbar.svelte';
	import CartCard from '../../components/CartCard.svelte';
	import { cart } from '../../stores/cart';

	let cartItems;

	cart.subscribe((val) => {
		cartItems = val;
	});
	function handleRemove(event) {
		cart.update((prev) => {
			prev.splice(event.detail.idx, 1);
			return prev;
		});
	}

	function handleQtyChange(event) {
		cart.update((prev) => {
			prev[event.detail.idx].qty = event.detail.qty;
			return prev;
		});
	}

    function generate(n) {
        var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   
        
        if ( n > max ) {
            return generate(max) + generate(n - max);
        }
        
        max        = Math.pow(10, n+add);
        var min    = max/10; // Math.pow(10, n) basically
        var number = Math.floor( Math.random() * (max - min + 1) ) + min;
        
        return ("" + number).substring(add); 
    }

    function reserveHandler() {
        let code = generate(6)
        localStorage.setItem("code", code)
        window.location.href = "/receipt"
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
				on:qtychange={handleQtyChange}
			/>
		{/each}
	</div>
	<div class="bill">
		<h1>TOTAL</h1>
		<h1 class="sub" id="price">Subtotal: AED {total}</h1>
		<h1 class="sub">Status: IN STOCK</h1>
		<button disabled = {cartItems.length == 0} on:click={reserveHandler}>RESERVE</button>
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
		height: 375px;
		width: 30%;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		background-color: #e7e7e7;
		border-radius: 10px;
	}

	.bill > button {
		width: max-content;
	}

	.cart-container {
		padding: 0rem 2rem 2rem 2rem;
		height: max-content;
		background-color: #e7e7e7;
		width: 70%;
		border-radius: 10px;
	}

	.sub {
		margin-top: 5%;
		margin-left: 5%;
		font-weight: 600;
		font-size: 1.25em;
	}

	.sub + .sub {
		margin-top: 2%;
	}

	button {
		width: 9rem;
		border-radius: 3em;
		background-color: #4890ae;
		margin-top: 45%;
		padding: 1em 1.5em;
		border: none;
		font-family: Josefin Sans, Verdana, sans-serif;
	}

	button:hover {
		background-color: #59aed2;
	}

	#price {
		font-family: Sofia Sans, Josefin Sans, Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
