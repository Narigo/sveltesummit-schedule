<script lang="ts">
  import Layout from "./layout.svelte";
  import Link from "./link.svelte";

  export let path: string;
</script>

<Layout>
  <h1 slot="header">404 - Not found</h1>
  <p>The page {path} could not be found.</p>
  <Link to="/">Main page</Link>
  <footer slot="footer" />
</Layout>
