<script lang="ts">
	import Link from './link.svelte';
</script>

<slot name="fullheader">
	<header>
		<slot name="header">hello</slot>
	</header>
</slot>
<main>
	<slot />
</main>
<slot name="full-footer">
	<footer>
		<slot name="footer"><Link to="/">Back to selection</Link></slot>
	</footer>
</slot>

<style>
	header,
	footer {
		background-color: #666;
		color: #f9f9f9;
		display: flex;
		margin: 0;
		padding: 2em;
	}

	main {
		align-items: center;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		padding: 2em 0;
	}
</style>
