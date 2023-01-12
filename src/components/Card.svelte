<script>
    export let img;
    export let item;
    export let status;
</script>

<div class="card">
    <img src={img} height = "100" alt="">
    <p>{item}</p>
    <span>{status}</span>
</div>