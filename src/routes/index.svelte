<script lang="ts">
	import availableSchedules from '../service/schedules';
	import Layout from '../components/layout.svelte';
	import Link from 'src/components/link.svelte';
</script>

<Layout>
	<div slot="header">
		<h1>Welcome to the Svelte Summit Schedule!</h1>
	</div>
	{#each availableSchedules as schedule}
		<Link to={`/schedule/${schedule.value}`}>{schedule.label}</Link>
	{/each}
	<div slot="footer">
		<h1>done.</h1>
	</div>
</Layout>
