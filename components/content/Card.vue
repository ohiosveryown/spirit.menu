<template>
  <section>
    <slot />
  </section>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";
  @import "/assets/style/type.scss";

  section {
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius--sm);
    border: 1px solid #ddd4be;
    width: 100%;
    @include breakpoint(md) {
      gap: 1.2rem;
      padding: 2.2rem 2.4rem 2rem;
      width: 25vw;
    }
    @include breakpoint(lg) {
      width: 21vw;
    }
    @include breakpoint(xl) {
      width: 14vw;
    }
  }

  :deep(h1) {
    @include italic;
    font-size: 3rem;
    letter-spacing: -0.25px;
    line-height: 1;
    // text-align: center;
    -webkit-text-stroke: 0.25px var(--color--primary);
    text-stroke: 0.25px var(--color--primary);
  }

  :deep(h2) {
    @include monospace;
    margin: 1.2rem 0 0.2rem;
    border-top: 0.5px solid #ddd4be;
    border-bottom: 0.5px solid #ddd4be;
    padding: 0.5rem 0 0.6rem;
    text-align: center;
    font-size: 1.3rem;
  }

  :deep(p) {
    @include serif;
    text-align: justify;
  }

  :deep(article:before),
  :deep(article:after) {
    content: "***";
    display: flex;
    justify-content: center;
    padding: 1.2rem 0;
    text-align: center;
    opacity: 0.76;
  }

  :deep(article p:first-of-type) {
    text-indent: 0;
  }

  :deep(article p) {
    text-indent: 3ch;
  }

  :deep(.flourish) {
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    text-indent: 0;
  }

  :deep(tr) {
    vertical-align: top;
    color: var(--color--primary);
    text-transform: capitalize;
  }

  :deep(tr) {
    font-size: 1.6rem;
    line-height: 1.1;
  }

  :deep(td) {
    @include sans;
    opacity: 0.82;
  }

  :deep(td + td) {
    @include monospace;
    opacity: 1;
    text-transform: none;
  }
</style>

<script setup></script>
