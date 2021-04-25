<script lang="ts">
	export let offset: number = 0;

	let start = 14 * 60;

	$: calculateWithOffset = (time: string) => calculateTime(time, offset);

	function nf(n: number): string {
		return `${n}`.padStart(2, '0');
	}

	function calculateTime(time: string, offsetInMinutes: number): string {
		const [h, m] = time.split(/:/).map((x) => parseInt(x, 10));
		const offsetTimeInMinutes = h * 60 + m + offsetInMinutes + start;
		const hourWithOffset = Math.floor(offsetTimeInMinutes / 60);
		const minsWithOffset = offsetTimeInMinutes % 60;
		return `${nf(hourWithOffset)}:${nf(minsWithOffset)}`;
	}
</script>

<h2>Svelte Summit Schedule</h2>

<ol>
	<li>{calculateWithOffset('0:00​')} - Intro</li>
	<li>{calculateWithOffset('0:05')} - Generation Svelte</li>
	<li>{calculateWithOffset('0:15')} - Break</li>
	<li>{calculateWithOffset('0:20')} - Data Science Widgets with Svelte and Jupyter</li>
	<li>{calculateWithOffset('0:25')} - Break</li>
	<li>{calculateWithOffset('0:26')} - Optimizing Your Svelte Community Experience</li>
	<li>{calculateWithOffset('0:32')} - Break</li>
	<li>{calculateWithOffset('0:35')} - Svelte-NodeGUI (Full talk)</li>
	<li>{calculateWithOffset('1:00')} - Break</li>
	<li>{calculateWithOffset('1:05')} - Untangling Composition</li>
	<li>{calculateWithOffset('1:16')} - Break</li>
	<li>{calculateWithOffset('1:20')} - Testing Svelte</li>
	<li>{calculateWithOffset('1:28')} - Break</li>
	<li>{calculateWithOffset('1:35')} - Declarative Data Visualization (Full talk)</li>
	<li>{calculateWithOffset('2:00')} - A signal engine for audio and music in your Svelte app</li>
	<li>
		{calculateWithOffset('2:10')} - Breakfast/Lunch/Dinner Break and Meetball session (starts at 2.10)!
	</li>
	<li>{calculateWithOffset('2:45')} - Svelte Can Compile and so can you!</li>
	<li>{calculateWithOffset('2:52')} - Break</li>
	<li>{calculateWithOffset('2:55')} - Svelte Without the JavaScript (Full talk)</li>
	<li>{calculateWithOffset('3:21')} - Break</li>
	<li>{calculateWithOffset('3:25')} - Design Ñgineering</li>
	<li>{calculateWithOffset('3:50')} - Quiz time!!</li>
	<li>{calculateWithOffset('4:10')} - Compile for accessibility with Svelte</li>
	<li>{calculateWithOffset('4:20')} - Break</li>
	<li>{calculateWithOffset('4:25')} - Reactive Forms</li>
	<li>{calculateWithOffset('4:36')} - Break</li>
	<li>
		{calculateWithOffset('4:40')} - Building the Next Generation of Low Code with Svelte (Full talk)
	</li>
	<li>{calculateWithOffset('5:05')} - Break</li>
	<li>{calculateWithOffset('5:10')} - Zwoosh YEAHHH Shabam! 🤯 Whimsy in motion (Full talk)</li>
	<li>{calculateWithOffset('5:35')} - Break</li>
	<li>{calculateWithOffset('5:40')} - An update on SvelteKit</li>
	<li>{calculateWithOffset('6:10')} - End notes and Discord Stage hangout!</li>
</ol>
