<script lang="ts">
  import { isScheduleByTimes } from "$lib/service/is-schedule-by-times";

  import type {
    ScheduleItems,
    ScheduleItemWithTime,
  } from "$lib/service/schedule-item";

  import ScheduleItem from "./schedule-item.svelte";

  export let offset: number = 0;
  export let scheduleFile: string;

  let schedule: ScheduleItems = [];
  let scheduleByTimes = getScheduleByTime(schedule);
  let start = 14 * 60;

  import(`../service/schedules/${scheduleFile}.js`).then((m) => {
    schedule = m.default;
    scheduleByTimes = getScheduleByTime(schedule);
  });

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
              link: item.link,
              time:
                index === 0
                  ? "0:00"
                  : addDurationToTime(item.duration, s[s.length - 1].time),
            },
          ];
        }, []);
  }

  function nf(n: number): string {
    return `${n}`.padStart(2, "0");
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
  {#each scheduleByTimes as talk, index}
    <ScheduleItem
      time={calculateTime(talk.time, offset)}
      from={index % 2 === 0 ? "left" : "right"}
      --animationDelay={`${index * 50}ms`}
    >
      {#if talk.link}
        <a href={talk.link} target="_blank" rel="noopener noreferer"
          >{talk.name}</a
        >
      {:else}
        {talk.name}
      {/if}
    </ScheduleItem>
  {/each}
</ol>

<style>
  ol {
    list-style-type: none;
    padding: 0;
  }
</style>
