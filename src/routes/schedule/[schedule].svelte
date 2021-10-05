<script lang="ts">
  import { page } from "$app/stores";
  import Layout from "$lib/component/layout.svelte";
  import Schedule from "$lib/component/schedule.svelte";
  import availableSchedules from "$lib/service/schedules";
  import timezones from "$lib/service/timezones";
  let schedule: string = $page.params.schedule;
  let scheduleObject = availableSchedules.find((s) => s.value === schedule);
  let offset = 0;
</script>

<Layout>
  <div slot="header">
    <h1>{scheduleObject.label}</h1>
  </div>

  <p>Please select your favorite timezone:</p>
  <select bind:value={offset}>
    {#each timezones as timezone}
      <option value={timezone.value}>{timezone.label}</option>
    {/each}
  </select>

  <Schedule scheduleMeta={scheduleObject} {offset} scheduleFile={schedule} />
</Layout>
