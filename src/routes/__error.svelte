<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        error,
        statusCode: status,
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script lang="ts">
  import Error404 from "$lib/component/Error404.svelte";

  export let error: any;
  export let statusCode: number;
  export let title: string;
</script>

{#if statusCode === 404}
  <Error404 {error} />
{:else}
  <h1>{title}</h1>
{/if}
