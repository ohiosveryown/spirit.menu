<template>
  <aside>
    <span class="flourish">***</span>
    <span class="volume">Volume №1 </span>
    <h1 class="heading">
      Spirit dot menu – explore a curated selection of creative and classic
      cocktails
    </h1>
    <img
      src="https://res.cloudinary.com/dn1q8h2ga/image/upload/v1724270378/spirit.menu/logotype_2x_ynwaai.webp"
      alt="spirit.menu logotype"
      class="logotype"
    />
    <span class="date monospace">MMXXIV</span>
    <span class="flourish">***</span>
  </aside>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @include breakpoint(lg) {
      gap: 4rem;
      width: 28vw;
      height: 100vh;
    }
  }

  aside h1 {
    visibility: hidden;
    position: absolute;
    pointer-events: none;
  }

  aside .volume,
  aside .date,
  aside .flourish {
    color: var(--color--secondary);
  }

  aside img {
    width: 50%;
    height: auto;
    object-fit: contain;
    pointer-events: none;
    @include breakpoint(lg) {
      width: 64%;
    }
  }
</style>

<script setup></script>
