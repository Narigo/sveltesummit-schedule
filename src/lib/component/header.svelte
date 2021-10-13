<script lang="ts">
  import SpringHeader from "./header/SpringHeader.svelte";

  export let variant: "fall" | "spring" = "spring";
</script>

{#if variant === "spring"}
  <SpringHeader><slot /></SpringHeader>
{:else}
  <SpringHeader><slot /></SpringHeader>
{/if}
