<script>
	import Navbar from '../../../components/Navbar.svelte';	
    export let data;
    let selected = data.notebook;
</script>

<Navbar />
<main>
	<div class="info">
		<div class="photo">
			<img src={data.notebook.img} alt="" />
		</div>
		<div class="content">
			<h1>{data.notebook.name}</h1>
			<div>
				<p>
					Registers are the official notebooks in DPS Sharjah for Physics, Chemistry, Biology, Math.
					They are a unique testament to DPS and the values it stands for.
				</p>
			</div>
			<div class="prod-info">
				<span class="price">AED {selected.price}</span>
				<span><button>ADD TO CART</button></span>
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

	.prod-info {
		margin-top: 10%;
	}

	.price {
		font-family: Sofia Sans, Verdana, Geneva, Tahoma, sans-serif;
		font-size: 1.25em;
	}

	button {
		width: 15%;
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
