<script lang="ts">
  import { page } from "$app/stores";
  import Layout from "$lib/component/layout.svelte";
  import Schedule from "$lib/component/schedule.svelte";
  import availableSchedules from "$lib/service/schedules";
  let schedule: string = $page.params.schedule;
  let scheduleObject = availableSchedules.find((s) => s.value === schedule);

  const timezones = [
    { value: -8 * 60, label: "UTC-08:00 - San Francisco (PDT)" },
    { value: -7 * 60, label: "UTC-07:00 - Salt Lake City (MDT)" },
    { value: -6 * 60, label: "UTC-06:00 - Chicago (CDT), Mexico City (CDT)" },
    {
      value: -5 * 60,
      label: "UTC-05:00 - New York City (EDT), Santiago (CLT)",
    },
    {
      value: -4 * 60,
      label: "UTC-04:00 - Buenos Aires (ART), São Paulo (BRT)",
    },
    { value: -1 * 60, label: "UTC-01:00 - Accra (GMT), Reykjavik (GMT)" },
    { value: 0, label: "UTC+00:00 - London (BST)" },
    {
      value: 1 * 60,
      label: "UTC+01:00 - Cairo (EET), Johannesburg (SAST), Paris (CEST)",
    },
    { value: 2 * 60, label: "UTC+02:00 - Jerusalem (IDT), Moscow (MSK)" },
    { value: 4 * 60 + 30, label: "UTC+04:30 - Chennai (IST)" },
    { value: 6 * 60, label: "UTC+06:00 - Hanoi (ICT), Jakarta (WIB)" },
    {
      value: 7 * 60,
      label: "UTC+07:00 - Hong Kong (HKT), Perth (AWST), Singapore (SGT)",
    },
    { value: 8 * 60, label: "UTC+08:00 - Tokyo (JST)" },
    { value: 9 * 60, label: "UTC+09:00 - Sydney (AEST)" },
  ];

  let offset = 0;
</script>

<Layout>
  <div slot="header">
    <h1>Svelte Summit schedule {schedule}</h1>
  </div>

  <p>Please select your favorite timezone:</p>
  <select bind:value={offset}>
    {#each timezones as timezone}
      <option value={timezone.value}>{timezone.label}</option>
    {/each}
  </select>

  <Schedule start={scheduleObject.start} {offset} scheduleFile={schedule} />
</Layout>
