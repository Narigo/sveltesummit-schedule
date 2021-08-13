<script lang="ts">
	import Layout from '../components/layout.svelte';
	import availableSchedules from '../service/schedules';
	import { base } from '$app/paths';
</script>

<Layout>
	<div slot="header">
		<h1>Welcome to the Svelte Summit Schedule!</h1>
	</div>
	{#each availableSchedules as schedule}
		<a href={`${base}/schedule/${schedule.value}`}>{schedule.label}</a>
	{/each}
	<div slot="footer">
		<h1>done.</h1>
	</div>
</Layout>
