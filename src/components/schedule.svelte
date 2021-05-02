<script lang="ts">
	import ScheduleItem from './schedule-item.svelte';
	import styles from './schedule.module.css';

	interface Talk {
		name: string;
	}
	interface ScheduleWithTimes extends Talk {
		time: string;
	}
	interface ScheduleWithDuration extends Talk {
		duration: string;
	}
	type Schedule = ScheduleWithTimes[] | ScheduleWithDuration[];

	export let offset: number = 0;
	export let schedule: Schedule = [];

	let scheduleByTimes = isScheduleByTimes(schedule)
		? schedule
		: schedule.reduce<ScheduleWithTimes[]>((s, item, index) => {
				return [
					...s,
					{
						name: item.name,
						time: index === 0 ? '0:00' : addDurationToTime(item.duration, s[s.length - 1].time)
					}
				];
		  }, []);
	let start = 14 * 60;

	$: calculateWithOffset = (time: string) => calculateTime(time, offset);

	function addDurationToTime(duration: string, time: string): string {
		const [ah, am] = time.split(/:/).map((x) => parseInt(x, 10));
		const [dh, dm] = duration.split(/:/).map((x) => parseInt(x, 10));
		const h = Math.floor((am + dm) / 60) + dh + ah;
		const m = (am + dm) % 60;
		return `${h}:${m}`;
	}

	function isScheduleByTimes(schedule: Schedule): schedule is ScheduleWithTimes[] {
		return schedule.length === 0 || !!(schedule[0] as ScheduleWithTimes).time;
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
		<ScheduleItem className={styles.item} time={calculateWithOffset(talk.time)} talk={talk.name} />
	{/each}
</ol>

<style>
	ol {
		list-style-type: none;
	}
</style>
