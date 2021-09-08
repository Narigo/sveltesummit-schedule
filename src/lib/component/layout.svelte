<script lang="ts">
  import availableSchedules from "$lib/service/schedules";
  import Link from "./link.svelte";
</script>

<slot name="fullheader">
  <header>
    <slot name="header">hello</slot>
  </header>
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
        {#each availableSchedules.slice(0, 3) as schedule}
          <li>
            <Link to={`/schedule/${schedule.value}`}>{schedule.label}</Link>
          </li>
        {/each}
        {#if availableSchedules.length >= 4}
          <li><Link to="/">Show more schedules</Link></li>
        {/if}
      </ul>
    </slot>
  </footer>
</slot>

<style>
  header,
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
