<script>
    import Navbar from "../components/Navbar.svelte";
    import Section from "../components/Section.svelte";
    import Card from "../components/Card.svelte";
</script>

<Navbar />
<main>
    <Section title = {"Books 📖"}>
        <p>Books thingies come here</p>
        <div class="notebooks">
            {#each Array(5) as _, index (index)}
                <Card img = {"/nbk_trial.png"} item = {"Register"} status = {"IN STOCK"}/>
            {/each}
        </div>
        <div class="textbook"></div>
    </Section>
    <Section title = {"Uniform 👔"}>
        <p>Uniform thingies come here</p>   
    </Section>
</main>

<style>
    main {
        width: 90%;
        margin: auto;
    }
    .notebooks {
        display: grid;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 0.5rem;

    }
</style>    