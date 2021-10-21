<header>
  <div>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="100%"
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <filter
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          id="noise"
          filterUnits="objectBoundingBox"
          color-interpolation-filters="sRGB"
        >
          <feTurbulence
            result="f1"
            type="fractalNoise"
            stitchTiles="noStitch"
            baseFrequency="1"
            numOctaves="1"
            seed="0"
          />
          <feColorMatrix
            in="f1"
            result="f2"
            type="matrix"
            values="0 0 0 0 0
                     -8 0 0 0 4
                      0 0 0 0 0
                      0 0 0 0 1"
          />
          <feColorMatrix in="f2" result="f3" type="luminanceToAlpha" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="f3" />
          </feMerge>
        </filter>
      </defs>
      <g fill="currentColor">
        <rect x="0" y="0" width="1000" height="500" filter="url(#noise)" />
      </g>
    </svg>
    <section>
      <slot />
    </section>
  </div>
</header>

<style>
  div {
    --animation-duration: 120s;
    animation: sunset var(--animation-duration) infinite ease-in-out alternate;
    background: linear-gradient(180deg, rgb(0, 0, 0), rgb(117, 62, 206), rgb(225, 142, 78));
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

  svg {
    animation: sun var(--animation-duration) ease-in-out infinite alternate;
    bottom: 0;
    clip-path: circle(25% at 50% 100%);
    color: rgba(210, 200, 108, 1);
    position: absolute;
    left: calc(50% - 12.5vw);
    height: 100%;
    max-width: 25vw;
    width: 25vw;
  }

  @keyframes sun {
    0% {
      color: rgba(245, 123, 57, 0.769);
      clip-path: circle(0% at 50% 100%);
    }
    15% {
      color: rgba(245, 123, 57, 0.769);
      clip-path: circle(0% at 50% 100%);
    }
    50% {
      color: rgba(240, 173, 73, 0.947);
      clip-path: circle(23% at 50% 100%);
    }
    100% {
      color: rgb(247, 196, 84);
      clip-path: circle(26% at 50% 100%);
    }
  }

  @keyframes sunset {
    0% {
      background-position: 50% 0%;
    }
    15% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 50% 75%;
    }
    100% {
      background-position: 50% 100%;
    }
  }
</style>
