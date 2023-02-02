<script>
	import Navbar from '../../../components/Navbar.svelte';	
    import saveToCart from "../../../lib/cartFuncs"
    export let data;
    let qty = 1;
    let selected = data.textbook.variations[0];
</script>

<Navbar />
<main>
	<div class="info">
		<div class="photo">
			<img src={data.textbook.img} alt="" />
		</div>
		<div class="content">
			<h1>{data.textbook.name}</h1>
            <h2 class = "stat" class:outstock = {!selected.in_stock}>{selected.in_stock ? "IN STOCK" : "OUT OF STOCK"}</h2>
			<label for="size">Choose class:</label>
			<select bind:value = {selected} name="size" id="size">
                {#each data.textbook.variations as v, _}
				    <option value={v}>{v.name}</option>
                {/each}
			</select>
			<div>
				<p>
					Registers are the official notebooks in DPS Sharjah for Physics, Chemistry, Biology, Math.
					They are a unique testament to DPS and the values it stands for.
				</p>
			</div>
			<div class="prod-info">
				<span class="price">AED {selected.price}</span>
                <div class = "det-groups">
                    <label for = "qty">Qty</label><input type="number" name="qty" id="qty" class = "qty" bind:value = {qty}>
                </div>
				<span><button disabled = {!selected.in_stock} on:click = {saveToCart(selected, qty, { img : data.textbook.img, name : `${data.textbook.name} ${selected.name}`})}>ADD TO CART</button></span>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		width: 94%;
		margin: 2rem auto;
	}

	.info {
		display: flex;
		margin: auto;
	}

	.photo {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 500px;
		width: 30%;
		/* background-color: aliceblue; */
	}

	.content {
		font-size: 1.25em;
		height: 500px;
		width: 70%;
		/* background-color: antiquewhite; */
		padding: 10px;
		padding-left: 30px;
		box-sizing: border-box;
	}

	img {
		height: 88%;
	}

	select {
		width: 10%;
		padding: 3px;
	}

    .stat {
        font-size: 1.5rem;
        color: green;
    }
    .outstock {
        color: red;
    }

	.prod-info {
		margin-top: 10%;
        display: flex;
        width: max-content;
        gap: 1rem;
        align-items: baseline;
	}

	.price {
		font-family: Sofia Sans, Verdana, Geneva, Tahoma, sans-serif;
		font-size: 1.25em;
	}

    .qty { 
        height: 1rem;
        width: 3rem;
    }

    .det-groups {
        display: flex;
        gap: .5rem;  
    }

	button {
		width: 9rem;
		border-radius: 3em;
		background-color: #67a465;
		margin-left: 5%;
		padding: 1em 1.5em;
		border: none;
		font-family: Josefin Sans, Verdana, sans-serif;
	}

	button:hover {
		background-color: #7bb179;
	}
</style>
