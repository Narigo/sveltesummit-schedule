<script lang="ts">
	import { base } from '$app/paths';
	export let to: string;

	const path = /^\w+:\/\//.test(to) ? to : `${base}${to}`;
</script>

<a href={path}><slot /></a>

<style>
	a {
		color: #fff;
		text-decoration: underline;
	}
</style>
