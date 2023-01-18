<script>
	import Navbar from '../../components/Navbar.svelte';
	let uniforms;
</script>

<Navbar />
<main>
	<div class="info">
		<div class="photo">
			<img src="/nbk_trial.png" alt="" />
		</div>
		<div class="content" />
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
		height: 500px;
		width: 40%;
		background-color: aliceblue;
	}

	.content {
		height: 500px;
		width: 60%;
		background-color: antiquewhite;
	}
</style>
