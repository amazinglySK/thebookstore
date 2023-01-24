<script>
    export let name
    export let value
    export let price
    export let img
</script>


<div class="cart-card">
    <div class="photo">
        <img src={img} alt="" />
    </div>
    <div class="content">
        <h1>{name}</h1>
        <div class="prod-info">
            <span class="price">AED {price}</span>
            <div class = "qty-group">
                <label for = "qty">Qty</label><input type="number" name="qty" id="qty" class = "qty" bind:value={value}>
            </div>
        </div>
        <button class="remove">
            Remove
        </button>
    </div>
</div>

<style>
    .cart-card {
        background-color: #C2C2C2;
        padding: 2rem;
        border-radius: 10px;
		display: flex;
        gap: 1rem;
		margin: auto;
	}

	.content {
		font-size: 1.25em;
		/* background-color: antiquewhite; */
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
</style>