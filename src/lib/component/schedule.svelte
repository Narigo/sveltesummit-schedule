<script lang="ts">
  import calculateTime from "$lib/calculate-time/calculate-time";
  import getScheduleByTimes from "$lib/get-schedule-by-times/get-schedule-by-times";

  import type { ScheduleItems } from "$lib/service/schedule-item";
  import type { ScheduleMeta } from "$lib/service/schedules";

  import ScheduleItem from "./schedule-item.svelte";

  export let offset: number = 0;
  export let scheduleFile: string;
  export let scheduleMeta: ScheduleMeta;

  let schedule: ScheduleItems = [];
  let scheduleByTimes = getScheduleByTimes(schedule);
  let startInMinutes =
    scheduleMeta.start.getUTCHours() * 60 + scheduleMeta.start.getUTCMinutes();

  import(`../service/schedules/${scheduleFile}.js`).then((m) => {
    schedule = m.default;
    scheduleByTimes = getScheduleByTimes(schedule);
  });
</script>

<h2>Svelte Summit Schedule</h2>
<ol>
  {#each scheduleByTimes as talk, index}
    <ScheduleItem
      time={calculateTime(talk.time, startInMinutes, offset)}
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
