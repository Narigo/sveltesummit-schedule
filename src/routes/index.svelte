<script lang="ts">
	import Schedule from '../components/schedule.svelte';

	let offset = 0;

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

	const schedule = [
		{ time: '0:00​', name: 'Intro' },
		{ time: '0:05', name: 'Generation Svelte' },
		{ time: '0:15', name: 'Break' },
		{ time: '0:20', name: 'Data Science Widgets with Svelte and Jupyter' },
		{ time: '0:25', name: 'Break' },
		{ time: '0:26', name: 'Optimizing Your Svelte Community Experience' },
		{ time: '0:32', name: 'Break' },
		{ time: '0:35', name: 'Svelte-NodeGUI (Full talk)' },
		{ time: '1:00', name: 'Break' },
		{ time: '1:05', name: 'Untangling Composition' },
		{ time: '1:16', name: 'Break' },
		{ time: '1:20', name: 'Testing Svelte' },
		{ time: '1:28', name: 'Break' },
		{ time: '1:35', name: 'Declarative Data Visualization (Full talk)' },
		{ time: '2:00', name: 'A signal engine for audio and music in your Svelte app' },
		{ time: '2:10', name: 'Breakfast/Lunch/Dinner Break and Meetball session (starts at 2.10)!' },
		{ time: '2:45', name: 'Svelte Can Compile and so can you!' },
		{ time: '2:52', name: 'Break' },
		{ time: '2:55', name: 'Svelte Without the JavaScript (Full talk)' },
		{ time: '3:21', name: 'Break' },
		{ time: '3:25', name: 'Design Ñgineering' },
		{ time: '3:50', name: 'Quiz time!!' },
		{ time: '4:10', name: 'Compile for accessibility with Svelte' },
		{ time: '4:20', name: 'Break' },
		{ time: '4:25', name: 'Reactive Forms' },
		{ time: '4:36', name: 'Break' },
		{ time: '4:40', name: 'Building the Next Generation of Low Code with Svelte (Full talk)' },
		{ time: '5:05', name: 'Break' },
		{ time: '5:10', name: 'Zwoosh YEAHHH Shabam! 🤯 Whimsy in motion (Full talk)' },
		{ time: '5:35', name: 'Break' },
		{ time: '5:40', name: 'An update on SvelteKit' },
		{ time: '6:10', name: 'End notes and Discord Stage hangout!' }
	];
</script>

<h1>Welcome to the Svelte Summit!</h1>
<p>Please select your favorite timezone:</p>
<select bind:value={offset}>
	{#each timezones as timezone}
		<option value={timezone.value}>{timezone.label}</option>
	{/each}
</select>

<Schedule {offset} {schedule} />
