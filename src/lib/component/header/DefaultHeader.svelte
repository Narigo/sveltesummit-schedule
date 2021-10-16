<header>
  <div>
    <section>
      <slot />
    </section>
  </div>
</header>

<style>
  div {
    --animation-duration: 25s;
    animation: sunset var(--animation-duration) infinite ease-in-out alternate;
    background: linear-gradient(180deg, rgb(176, 41, 0), rgb(250, 175, 84));
    background-size: 400% 400%;
    color: #000;
    display: flex;
    gap: 2em;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    height: 25vh;
    justify-content: center;
    text-shadow: -2px 0 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, 2px -2px 0 #fff,
      0 -2px 0 #fff;
  }

  @keyframes sunset {
    0% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 50% 0%;
    }
  }
</style>
