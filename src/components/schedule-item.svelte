<script lang="ts">
	export let className: string;
	export let talk: string;
	export let time: string;
</script>

<li class={className}>
	<span class="time">{time}</span><span class="talk">{talk}</span>
</li>

<style>
	li {
		align-items: center;
		display: flex;
		gap: 25px;
		margin-bottom: 10px;
	}
	.time {
	}
	.talk {
		flex: 1;
	}
</style>
