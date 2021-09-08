<script lang="ts">
  import { base } from "$app/paths";
  export let to: string;

  const path = /^\w+:\/\//.test(to) ? to : `${base}${to}`;
</script>

<a href={path}><slot /></a>

<style>
  :global(html) {
    --link-color: #000;
  }

  a {
    color: var(--link-color);
  }
</style>
