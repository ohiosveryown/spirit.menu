<template>
  <div class="container">
    <main>
      <ContentDoc />
    </main>
    <List />
  </div>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";
  @import "/assets/style/type.scss";

  .container {
    @include breakpoint(md) {
      display: flex;
    }
  }
</style>
