<template>
  <div class="container">
    <Cover class="cover" />
    <main>
      <ContentDoc>
        <template #empty />
      </ContentDoc>
    </main>
    <List />
  </div>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";
  @import "/assets/style/type.scss";

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @include breakpoint(md) {
      flex-direction: row;
      gap: 0;
    }
  }

  .cover {
    @include breakpoint(md) {
      position: sticky;
      top: 1.6rem;
      width: 40%;
    }
  }
</style>
