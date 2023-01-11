<script>
    import Navbar from "../components/Navbar.svelte";
    import Section from "../components/Section.svelte";
    import Card from "../components/Card.svelte";
</script>

<Navbar />
<Section title = {"Books"}>
    <p>Books thingies come here</p>
    <div class="notebooks">
        <Card img = {"/nbk_trial.png"}/>
    </div>
    <div class="textbook"></div>
</Section>
<Section title = {"Uniform"}>
    <p>Uniform thingies come here</p>   
</Section>