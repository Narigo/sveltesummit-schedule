<slot />

<style>
	:global(html, body, #svelte) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	:global(html) {
		overflow: hidden;
	}
	:global(body, #svelte) {
		overflow: auto;
	}

	:global(#svelte) {
		display: flex;
		flex-direction: column;
		margin: 0;
		min-height: 100%;
		padding: 0;
	}
</style>
