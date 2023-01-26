<script>
	export let img;
	export let item;
	export let status;
	export let url;
</script>

<a href={url}>
	<div class="card">
		<img src={img} height="200" alt="" />
		<p>{item}</p>
		<span class:stock={status == 'IN STOCK'}>{status}</span>
	</div>
</a>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}

	.stock {
		color: #008f31;
	}

	span {
		font-weight: 700;
		color: #cf3e3e;
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: auto;
	}
</style>
