<script lang="ts">
	export let time: string;
</script>

<li>
	<span class="time">{time}</span>
	<span class="talk"><slot /></span>
</li>

<style>
	li {
		align-items: center;
		display: flex;
		gap: 2em;
		margin-bottom: 1em;
		padding: 0.5em 0;
	}

	.talk {
		flex: 1;
	}
</style>
