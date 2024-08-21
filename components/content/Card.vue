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
    @include breakpoint(lg) {
      gap: 1.2rem;
      padding: 2.2rem 2.4rem 2rem;
      width: 21vw;
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
    margin: 0.4rem 0 0.8rem;
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

  :deep(p + p) {
    text-indent: 3ch;
  }

  :deep(p + p:nth-of-type(2)) {
    text-indent: 0;
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
  }
</style>

<script setup></script>
