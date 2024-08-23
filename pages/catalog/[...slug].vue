<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <ContentRenderer :value="doc" />

        <img
          class="figure--detail"
          :src="doc.figure"
          :alt="doc.title"
        />
      </template>
    </ContentDoc>
  </main>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";
  @import "/assets/style/type.scss";
  main {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    @include breakpoint(md) {
      flex-direction: row;
    }
  }

  img {
    flex: 1;
    border-radius: var(--border-radius--sm);
    min-height: calc(100vh - 3.2rem);
    object-fit: cover;
  }
</style>
