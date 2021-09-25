<header>
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
          values="-16 0 0 0 8
                  -16 0 0 0 8
                  -16 0 0 0 8
                    0 0 0 0 1"
        />
        <feColorMatrix in="f2" result="f3" type="luminanceToAlpha" />
        <feComposite in="SourceGraphic" in2="f3" result="f4" operator="in" />
        <feColorMatrix
          in="f4"
          result="f5"
          type="matrix"
          values="1 0 0 0 -1
                  0 1 0 0 -1
                  0 0 1 0 -1
                  0 0 0 1  0"
        />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="f5" />
        </feMerge>
      </filter>
    </defs>
    <g fill="#fff">
      <rect x="0" y="0" width="1000" height="500" filter="url(#noise)" />
    </g>
  </svg>
  <slot />
</header>

<style>
  svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 25vh;
    z-index: -1;
    clip-path: circle(25% at 50% 100%);
  }

  header {
    background-color: rgba(210, 66, 12, 0.5);
    color: #000;
    display: flex;
    gap: 2em;
    margin: 0;
    padding: 0;
    height: 25vh;
    text-shadow: -2px 0 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff, 2px -2px 0 #fff,
      0 -2px 0 #fff;
  }
</style>
