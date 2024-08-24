<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <ContentRenderer :value="doc" />

        <header>{{ doc.title }}</header>
        {{ doc.location }}

        <table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in doc.recipe"
              :key="item.ingredient"
            >
              <td>{{ item.ingredient }}</td>
              <td>{{ item.volume }}</td>
            </tr>
          </tbody>
        </table>

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
    position: sticky;
    top: 1.6rem;
    flex: 1;
    border-radius: var(--border-radius--sm);
    min-height: calc(100vh - 3.2rem);
    max-height: calc(100vh - 3.2rem);
    object-fit: cover;
  }

  tr {
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
  }

  td {
    border: 1px solid yellow;
    display: flex;
    color: red;
    height: max-content;
  }

  tr td:first-of-type {
    flex: 1;
  }
</style>
