<script lang="ts">
	import availableSchedules from '../service/schedules';
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
		<slot name="footer">
			<ul>
				<li><Link to="/">Back to selection</Link></li>
			</ul>
			<ul>
				{#each availableSchedules as schedule}
					<li><Link to={`/schedule/${schedule.value}`}>{schedule.label}</Link></li>
				{/each}
			</ul>
		</slot>
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

	footer {
		--link-color: #f9f9f9;
	}

	main {
		align-items: center;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		padding: 2em 0;
	}
</style>
