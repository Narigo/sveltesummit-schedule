<script context="module" lang="ts">
	interface Talk {
		name: string;
	}
	interface ScheduleItemWithTime extends Talk {
		time: string;
	}
	interface ScheduleItemWithDuration extends Talk {
		duration: string;
	}
	type ScheduleItems = ScheduleItemWithTime[] | ScheduleItemWithDuration[];
</script>

<script lang="ts">
	import ScheduleItem from './schedule-item.svelte';
	import styles from './schedule.module.css';

	export let offset: number = 0;
	export let scheduleFile: string;

	$: calculateWithOffset = (time: string) => calculateTime(time, offset);
	$: import(`../service/schedules/${scheduleFile}.js`).then((m) => {
		schedule = m.default;
		scheduleByTimes = getScheduleByTime(schedule);
	});

	let schedule: ScheduleItems = [];
	let scheduleByTimes = getScheduleByTime(schedule);
	let start = 14 * 60;

	function addDurationToTime(duration: string, time: string): string {
		const [ah, am] = time.split(/:/).map((x) => parseInt(x, 10));
		const [dh, dm] = duration.split(/:/).map((x) => parseInt(x, 10));
		const h = Math.floor((am + dm) / 60) + dh + ah;
		const m = (am + dm) % 60;
		return `${h}:${m}`;
	}

	function getScheduleByTime(schedule: ScheduleItems): ScheduleItemWithTime[] {
		return isScheduleByTimes(schedule)
			? schedule
			: schedule.reduce<ScheduleItemWithTime[]>((s, item, index) => {
					return [
						...s,
						{
							name: item.name,
							time: index === 0 ? '0:00' : addDurationToTime(item.duration, s[s.length - 1].time)
						}
					];
			  }, []);
	}

	function isScheduleByTimes(schedule: ScheduleItems): schedule is ScheduleItemWithTime[] {
		return schedule.length === 0 || !!(schedule[0] as ScheduleItemWithTime).time;
	}

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
	{#each scheduleByTimes as talk}
		<ScheduleItem time={calculateWithOffset(talk.time)}>{talk.name}</ScheduleItem>
	{/each}
</ol>

<style>
	ol {
		list-style-type: none;
		padding: 0;
	}
</style>
