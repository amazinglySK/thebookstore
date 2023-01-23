<script>
    import Navbar from "../../components/Navbar.svelte";
    import CartCard from "../../components/CartCard.svelte";
</script>

<Navbar />
<main>
    <div class="cart-container">
        <CartCard img = {"nbk_trial.png"} name = "Register 200pgs" price = {75} qty = {1}/>
    </div>
    <div class="bill">
        <h1>TOTAL</h1>
        <p>Subtotal : AED150</p>
        <p>Status : IN STOCK</p>
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
        background-color: #E7E7E7;
        width: 70%;
        border-radius: 10px;
    }
</style>