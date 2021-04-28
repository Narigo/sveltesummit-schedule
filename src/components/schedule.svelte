<script lang="ts">
	export let offset: number = 0;
	export let schedule: { time: string; name: string }[] = [];

	let start = 14 * 60;

	$: calculateWithOffset = (time: string) => calculateTime(time, offset);

	function nf(n: number): string {
		return `${n}`.padStart(2, '0');
	}

	function calculateTime(time: string, offsetInMinutes: number): string {
		const [h, m] = time.split(/:/).map((x) => parseInt(x, 10));
		const offsetTimeInMinutes = h * 60 + m + offsetInMinutes + start;
		const hourWithOffset = Math.floor(offsetTimeInMinutes / 60) % 24;
		const minsWithOffset = offsetTimeInMinutes % 60;
		return `${nf(hourWithOffset)}:${nf(minsWithOffset)}`;
	}
</script>

<h2>Svelte Summit Schedule</h2>

<ol>
	{#each schedule as talk}
		<li>{calculateWithOffset(talk.time)} - {talk.name}</li>
	{/each}
</ol>

<style>
	li {
		list-style-type: none;
	}
</style>
