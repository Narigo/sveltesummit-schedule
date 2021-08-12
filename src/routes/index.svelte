<script lang="ts">
	import Layout from '../components/layout.svelte';

	import Schedule from '../components/schedule.svelte';
	import type { ScheduleItems } from '../components/schedule.svelte';
	import { assets } from '$app/paths';

	const timezones = [
		{ value: -8 * 60, label: 'San Francisco (PDT)' },
		{ value: -7 * 60, label: 'Salt Lake City (MDT)' },
		{ value: -6 * 60, label: 'Chicago (CDT), Mexico City (CDT)' },
		{ value: -5 * 60, label: 'New York City (EDT), Santiago (CLT)' },
		{ value: -4 * 60, label: 'Buenos Aires (ART), São Paulo (BRT)' },
		{ value: -1 * 60, label: 'Accra (GMT), Reykjavik (GMT)' },
		{ value: 0, label: 'London (BST)' },
		{ value: 1 * 60, label: 'Cairo (EET), Johannesburg (SAST), Paris (CEST)' },
		{ value: 2 * 60, label: 'Jerusalem (IDT), Moscow (MSK)' },
		{ value: 4 * 60 + 30, label: 'Chennai (IST)' },
		{ value: 6 * 60, label: 'Hanoi (ICT), Jakarta (WIB)' },
		{ value: 7 * 60, label: 'Hong Kong (HKT), Perth (AWST), Singapore (SGT)' },
		{ value: 8 * 60, label: 'Tokyo (JST)' },
		{ value: 9 * 60, label: 'Sydney (AEST)' }
	];

	const availableSchedules = [
		{
			value: `${assets}/schedules/svelte-summit-2021-spring-by-duration.js`,
			label: 'Svelte Summit Spring 2021'
		}
	];

	let offset = 0;
	let selectedSchedule: string = availableSchedules[availableSchedules.length - 1].value;
</script>

<Layout>
	<div slot="header">
		<h1>Welcome to the Svelte Summit Schedule!</h1>
	</div>
	<p>Please select your favorite timezone:</p>
	<select bind:value={offset}>
		{#each timezones as timezone}
			<option value={timezone.value}>{timezone.label}</option>
		{/each}
	</select>
	<select bind:value={selectedSchedule}>
		{#each availableSchedules as schedule}
			<option value={schedule.value} selected={schedule.value === selectedSchedule}
				>{schedule.label}</option
			>
		{/each}
	</select>
	<p>selected {offset} for {selectedSchedule}</p>
	<div slot="footer">
		<h1>done.</h1>
	</div>
</Layout>
