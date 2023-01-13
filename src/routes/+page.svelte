<script>
	import Navbar from '../components/Navbar.svelte';
	import Section from '../components/Section.svelte';
	import Card from '../components/Card.svelte';
</script>

<Navbar />
<main>
	<h1>Books 📖</h1>
	<div class="container">
		<div class="notebook-section">
			<h2>Notebooks</h2>
			<div class="notebooks">
				{#each Array(15) as _, index (index)}
					<Card img={'/nbk_trial.png'} item={'Register'} status={'IN STOCK'} />
				{/each}
			</div>
		</div>
		<div class="textbook-section">
			<h2>Textbooks</h2>
			<div class="textbooks">
				{#each Array(11) as _, index (index)}
					<Card img={'/tbk_trial.png'} item={'Physics'} status={'IN STOCK'} />
				{/each}
			</div>
		</div>
	</div>
	<h1>Uniform 👔</h1>
	<div class="container">
		<div class="white-uniform">
			<h2>White uniform</h2>
			<div class="uniforms">
				{#each Array(8) as _, index (index)}
					<Card img={'/uni_trial.png'} item={'Physics'} status={'IN STOCK'} />
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	main {
		width: 95%;
		margin: 2rem auto;
	}
	.notebooks,
	.textbooks,
	.uniforms {
		gap: 4rem;
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;
	}
	.notebook-section,
	.textbook-section,
	.white-uniform {
		margin-left: 3rem;
		margin-top: 3em;
	}

	.notebooks::-webkit-scrollbar {
		display: none;
	}

	.textbooks::-webkit-scrollbar {
		display: none;
	}

	.uniforms::-webkit-scrollbar {
		display: none;
	}
</style>
