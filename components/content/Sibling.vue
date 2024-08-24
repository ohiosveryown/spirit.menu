<template>
  <footer>
    <header>Explore:</header>
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
    padding: 1.2rem 0 0.6rem;
    color: var(--color--secondary);
  }

  ul {
    display: flex;
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
    width: 8.8rem;
    height: 11.2rem;
    object-fit: cover;
    transition: transform 300ms ease;
  }

  img:hover {
    transform: translateY(-0.2rem);
  }
</style>

<script setup lang="ts">
  const { prev, next } = useContent()
</script>
