<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        statusCode: status,
        message: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script lang="ts">
  import { page } from "$app/stores";

  import Error404 from "$lib/component/Error404.svelte";

  export let statusCode: number;
  export let message: string;
</script>

{#if statusCode === 404}
  <Error404 path={$page.path} />
{:else}
  <h1>Error!</h1>
  <p>{message}</p>
{/if}
