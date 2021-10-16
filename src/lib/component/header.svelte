<script lang="ts">
  import type { HeaderVariant } from "./header/header.types";
  import DefaultHeader from "./header/DefaultHeader.svelte";
  import FallHeader from "./header/FallHeader.svelte";
  import SpringHeader from "./header/SpringHeader.svelte";

  export let variant: HeaderVariant = "default";
</script>

{#if variant === "spring"}
  <SpringHeader><slot /></SpringHeader>
{:else if variant === "fall"}
  <FallHeader><slot /></FallHeader>
{:else}
  <DefaultHeader><slot /></DefaultHeader>
{/if}
