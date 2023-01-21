<nav>
	<div class="left">
		<a href="/">Home</a>
		<a href="/reserve">Reserve</a>
	</div>
	<h1 class="hero">The Bookstore</h1>
	<div class="right">
		<a href="/products">Products</a>
		<a id="logo-link" href="https://www.dpssharjah.com" target="_blank" rel="noreferrer"
			><img class="logo" src="/dps.png" alt="" /></a
		>
	</div>
</nav>

<style>
	.hero {
		border: 4px solid black;
		padding: 20px;
		font-weight: 800;
		font-size: 2.5rem;
	}
	nav {
		border: 4px solid black;
		width: 94%;
		margin: 1.5rem auto;
		padding: 1.5rem 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: url('/banner.png');
		background-position: center;
	}

	a {
		text-decoration: none;
		border-bottom: 3px solid black;
		font-size: 1.25rem;
		font-weight: 600;
		color: inherit;
	}

	#logo-link {
		border-bottom: none;
	}

	.right,
	.left {
		padding: 20px;
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.logo {
		margin-left: 40px;
		width: 80px;
		height: 100px;
	}
</style>
