<script lang="ts">
  import FallHeader from "./header/FallHeader.svelte";
  import SpringHeader from "./header/SpringHeader.svelte";

  export let variant: "fall" | "spring" = "spring";
</script>

{#if variant === "spring"}
  <SpringHeader><slot /></SpringHeader>
{:else}
  <FallHeader><slot /></FallHeader>
{/if}
