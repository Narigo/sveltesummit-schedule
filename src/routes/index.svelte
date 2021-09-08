<script lang="ts">
  import availableSchedules from "$lib/service/schedules";
  import Layout from "$lib/component/layout.svelte";
  import Link from "$lib/component/link.svelte";
</script>

<Layout>
  <div slot="header">
    <h1>Welcome to the Svelte Summit Schedule!</h1>
  </div>
  {#each availableSchedules as schedule}
    <Link to={`/schedule/${schedule.value}`}>{schedule.label}</Link>
  {/each}
  <div slot="footer">
    <h1>done.</h1>
  </div>
</Layout>
