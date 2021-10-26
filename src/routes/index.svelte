<script lang="ts">
  import availableSchedules from "$lib/service/schedules";
  import Layout from "$lib/component/layout.svelte";
  import Link from "$lib/component/link.svelte";

  function formatDate(date: Date): string {
    return `${date.getUTCFullYear()}-${nf(date.getUTCMonth() + 1)}-${nf(
      date.getUTCDate()
    )}`;

    function nf(n: number): string {
      return (n < 10 ? "0" : "") + n;
    }
  }
</script>

<Layout>
  <div slot="header">
    <h1>Welcome to the Svelte Summit Schedule!</h1>
  </div>
  <section>
    {#each availableSchedules as schedule}
      <Link to={`/schedule/${schedule.value}`}>{schedule.label}</Link><br />
      {formatDate(schedule.start)}
    {/each}
  </section>
  <section>
    Please check the official Svelte Summit page if schedule is up.
  </section>
  <div slot="footer">
    <Link
      to="https://sveltesummit.com/"
      target="_blank"
      rel="noopener nofollow noreferer">Official Svelte Summit page</Link
    >
  </div>
</Layout>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
</style>
