<script>
	import Navbar from '../components/Navbar.svelte';
	import Section from '../components/Section.svelte';

    export let data; 
    let notebooks;
    let uniforms;
</script>

<Navbar />
<main>
	<h1>Books 📖</h1>
	<div class="container">
		<Section title="Notebooks" iterable = {notebooks || Array(15)} img = "/nbk_trial.png"/>
		<Section title="Textbooks" iterable = {data.textbooks || Array(15)} img = "/tbk_trial.png"/>
	</div>
	<h1>Uniform 👔</h1>
	<div class="container">
		<Section title = "White Uniform" img= "/uni_trial.png" iterable = {uniforms || Array(15)} />
	</div>
</main>

<style>
	main {
		width: 95%;
		margin: 2rem auto;
	}
</style>
