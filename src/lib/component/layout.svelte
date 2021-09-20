<script lang="ts">
  import availableSchedules from "$lib/service/schedules";
  import Header from "./header.svelte";
  import Link from "./link.svelte";

  const firstThreeSchedules = availableSchedules.slice(0, 3);
  const hasMoreSchedules = availableSchedules.length >= 4;
</script>

<slot name="fullheader">
  <Header>
    <slot name="header">hello</slot>
  </Header>
</slot>
<main>
  <slot />
</main>
<slot name="full-footer">
  <footer>
    <slot name="footer">
      <ul>
        <li><Link to="/">Back to selection</Link></li>
      </ul>
      <ul>
        {#each firstThreeSchedules as schedule}
          <li>
            <Link to={`/schedule/${schedule.value}`}>{schedule.label}</Link>
          </li>
        {/each}
        {#if hasMoreSchedules}
          <li><Link to="/">Show more schedules</Link></li>
        {/if}
      </ul>
    </slot>
  </footer>
</slot>

<style>
  footer {
    background-color: #666;
    color: #f9f9f9;
    display: flex;
    gap: 2em;
    margin: 0;
    padding: 2em;
  }

  footer {
    --link-color: #f9f9f9;
  }

  footer ul {
    padding: 0;
  }

  footer li {
    list-style-type: none;
  }

  main {
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding: 2em 0;
  }
</style>
