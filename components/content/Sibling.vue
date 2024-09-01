<template>
  <footer>
    <header>
      <span>
        <NuxtLink
          to="/"
          class="tooltip--trigger"
          >...</NuxtLink
        >
        <span class="tooltip">Go to index</span>
      </span>
      <span>/</span>
      <span
        >Explore
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.0002 1.25V11.25M6.0002 11.25L10.8002 6.45M6.0002 11.25L1.2002 6.45"
            stroke="var(--color--secondary)"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </header>
    <ul>
      <li v-if="prev">
        <NuxtLink :to="prev._path">
          <img
            :src="prev.figure"
            :alt="prev.title"
          />
        </NuxtLink>
      </li>
      <li v-if="next">
        <NuxtLink :to="next._path">
          <img
            :src="next.figure"
            :alt="next.title"
          />
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";
  @import "/assets/style/type.scss";

  footer {
    width: 100%;
  }

  header {
    @include sans;
    display: flex;
    gap: 0.6rem;
    width: 100%;
    padding: 1.2rem 0;
    color: var(--color--secondary);
    @include breakpoint(md) {
      padding-bottom: 0.6rem;
    }
  }

  header a {
    width: max-content;
    text-align: right;
    text-decoration: underline;
  }

  header span {
    position: relative;
  }

  .tooltip {
    position: absolute;
    z-index: var(--zmax);
    top: -0.2rem;
    left: 2.8rem;
    border-radius: var(--border-radius--sm);
    padding: 0.5rem 0.6rem 0.4rem;
    width: max-content;
    color: var(--color--secondary);
    background: var(--color--bg);
    font-size: 1.3rem;
    line-height: 1;
    opacity: 0;
    box-shadow: var(--shadow--sm);
    transform: translateX(-0.8rem);
  }

  @media (pointer: fine) {
    .tooltip--trigger:hover ~ .tooltip {
      opacity: 1;
      transform: translateX(0);
    }

    .tooltip {
      transition: all 300ms ease;
    }
  }

  ul {
    display: flex;
    gap: 2rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    @include breakpoint(md) {
      gap: 1.2rem;
      width: 25vw;
    }
    @include breakpoint(lg) {
      width: 19vw;
    }
    @include breakpoint(xl) {
      width: 14vw;
    }
  }
  img {
    border-radius: var(--border-radius--sm);
    width: 11.2rem;
    height: 15.2rem;
    object-fit: cover;
    transition: transform 300ms ease;
    @include breakpoint(md) {
      width: 8.4rem;
      height: 11.2rem;
    }
  }

  img:hover {
    transform: scale(1.02);
  }
</style>

<script setup lang="ts">
  const { prev, next } = useContent()
</script>
