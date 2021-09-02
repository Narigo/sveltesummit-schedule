<script lang="ts">
  export let time: string;
  export let from: "left" | "right";
  export let index: number = 0;
</script>

<li style={`--animation-delay: ${index * 50}ms;`} class={from}>
  <span class="time">{time}</span>
  <span class="talk"><slot /></span>
</li>

<style>
  li {
    align-items: center;
    animation: fade-in 1000ms forwards;
    animation-delay: var(--animation-delay);
    display: flex;
    gap: 2em;
    margin-bottom: 1em;
    opacity: 0;
    padding: 0.5em 0;
  }

  .left {
    --from-x-coord: -50%;
  }

  .right {
    --from-x-coord: 50%;
  }

  .talk {
    flex: 1;
  }

  @keyframes fade-in {
    from {
      transform: translateX(var(--from-x-coord));
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 100%;
    }
  }
</style>
