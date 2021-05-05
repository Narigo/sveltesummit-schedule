<slot name="fullheader"
	><header>
		<slot name="header">hello</slot>
	</header>
</slot>
<main>
	<slot />
</main>
<slot name="full-footer"
	><footer>
		<slot name="footer">hello footer</slot>
	</footer>
</slot>

<style>
	header,
	footer {
		background-color: #666;
		display: flex;
		margin: 0;
		padding: 2em;
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
