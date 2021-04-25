<script lang="ts">
	import Schedule from '../components/schedule.svelte';

	let offset = 0;
</script>

<h1>Welcome to the Svelte Summit!</h1>
<p>Please select your timezone:</p>
<select bind:value={offset}>
	<option value={-8 * 60}>San Francisco (PDT)</option>
	<option value={-7 * 60}>Salt Lake City (MDT)</option>
	<option value={-6 * 60}>Chicago (CDT), Mexico City (CDT)</option>
	<option value={-5 * 60}>New York City (EDT), Santiago (CLT)</option>
	<option value={-4 * 60}>Buenos Aires (ART), São Paulo (BRT)</option>
	<option value={-1 * 60}>Accra (GMT), Reykjavik (GMT)</option>
	<option value={0}>London (BST)</option>
	<option value={1 * 60}>Cairo (EET), Johannesburg (SAST), Paris (CEST)</option>
	<option value={2 * 60}>Jerusalem (IDT), Moscow (MSK)</option>
	<option value={4 * 60 + 30}>Chennai (IST)</option>
	<option value={6 * 60}>Hanoi (ICT), Jakarta (WIB)</option>
	<option value={7 * 60}>Hong Kong (HKT), Perth (AWST), Singapore (SGT)</option>
	<option value={8 * 60}>Tokyo (JST)</option>
	<option value={9 * 60}>Sydney (AEST)</option>
</select>

<Schedule {offset} />
