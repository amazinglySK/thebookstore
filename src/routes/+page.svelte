<script>
    import Navbar from "../components/Navbar.svelte";
    import Section from "../components/Section.svelte";
    import Card from "../components/Card.svelte";
</script>

<Navbar />
<main>
    <h1>Books 📖</h1>
    <div class="container">
        <div class="notebook-section">
            <h2>Notebooks</h2>
            <div class="notebooks">
                {#each Array(5) as _, index (index)}
                    <Card img = {"/nbk_trial.png"} item = {"Register"} status = {"IN STOCK"}/>
                {/each}
            </div>
        </div>
        <div class="textbook-section">
            <h2>Textbooks</h2>
            <div class="textbooks">
                {#each Array(5) as _, index (index)}
                    <Card img = {"/tbk_trial.png"} item = {"Physics"} status = {"IN STOCK"}/>
                {/each}
            </div>
        </div>
    </div>
    <h1>Uniform 👔</h1>
    <div class="container">
        <div class="white-uniform">
            <h2>White uniform</h2>
            <div class="uniforms">
                {#each Array(5) as _, index (index)}
                    <Card img = {"/uni_trial.png"} item = {"Physics"} status = {"IN STOCK"}/>
                {/each}
            </div>
        </div> 
    </div>
</main>

<style>
    main {
        width: 90%;
        margin: 2rem auto;
    }
    .notebooks, .textbooks, .uniforms{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 5rem;
        
    }
    .notebook-section, .textbook-section, .white-uniform {
        margin-left: 3rem;
    }
</style>    