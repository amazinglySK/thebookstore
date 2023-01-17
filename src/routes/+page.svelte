<script>
	import Navbar from '../components/Navbar.svelte';
	import Section from '../components/Section.svelte';

	export let data;
	let textbooks;
	let notebooks;
	// let uniforms;
</script>

<Navbar />
<main>
	<h1>Books 📖</h1>
	<div class="container">
		<Section title="Notebooks" iterable={notebooks || Array(15)} img="/nbk_trial.png" mock = {true}/>
		<Section title="Textbooks" iterable={textbooks || Array(15)} img="/tbk_trial.png" mock = {true}/>
	</div>
	<h1>Uniform 👔</h1>
	<div class="container">
		<Section title="White Uniform" img="/uni_trial.png" iterable={data.uniforms || Array(5)} mock = {false}/>
	</div>
</main>

<style>
	main {
		width: 94%;
		margin: 2rem auto;
	}
</style>
