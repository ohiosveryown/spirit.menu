<template>
  <img
    src="https://res.cloudinary.com/dn1q8h2ga/image/upload/v1724882151/spirit.menu/overlay-01_dgdah0.webp"
    alt=""
    class="overlay"
  />

  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <aside>
          <h1>
            <nuxt-link to="/">{{ doc.title }}</nuxt-link>
          </h1>

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

          <h2>{{ doc.location }}</h2>

          <article>
            <ContentRenderer :value="doc" />
          </article>

          <ul class="balance">
            <li>
              <span class="label">Balance</span>
              <div class="scale">
                <div :class="['dot', doc.balance]" />
                <div class="track" />
              </div>
            </li>

            <li>
              <span class="label">Bitter</span>
              <div class="scale">
                <div :class="['dot', doc.bitter]" />
                <div class="track" />
              </div>
            </li>

            <li>
              <span class="label">Savory</span>
              <div class="scale">
                <div :class="['dot', doc.savory]" />
                <div class="track" />
              </div>
            </li>

            <li>
              <span class="label">Sour</span>
              <div class="scale">
                <div :class="['dot', doc.sour]" />
                <div class="track" />
              </div>
            </li>

            <li>
              <span class="label">Sweet</span>
              <div class="scale">
                <div :class="['dot', doc.sweet]" />
                <div class="track" />
              </div>
            </li>
          </ul>

          <Sibling />

          <div class="like-counter">
            <button @click="incrementLikes">Like</button>
            <p>Likes: {{ likes }}</p>
          </div>
        </aside>

        <img
          class="figure--detail"
          :src="doc.figure"
          :alt="doc.title"
        />
      </template>

      <template #not-found>
        <!-- Replace below & Render list -->
        <h1 class="tac">Looks like you lost your way...</h1>
      </template>
    </ContentDoc>
  </main>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";
  @import "/assets/style/type.scss";

  .overlay {
    position: fixed;
    z-index: var(--z1);
    top: 0;
    left: 0;
    max-width: 100vw;
    width: 100vw;
    min-height: 100dvh;
    height: 100dvh;
    object-fit: cover;
    pointer-events: none;
    mix-blend-mode: color-burn;
    opacity: 1;
  }

  main {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.6rem;
    width: 100%;
    @include breakpoint(md) {
      flex-direction: row;
      gap: 1.6rem;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    border-radius: var(--border-radius--sm);
    border: 1px solid #ddd4be;
    padding: 3.2rem;
    width: 100%;
    height: max-content;
    @include breakpoint(sm) {
      padding: 6.4rem 6.4rem 6.4rem;
    }
    @include breakpoint(md) {
      padding: 2.2rem 2.4rem 2.4rem;
      width: 25vw;
    }
    @include breakpoint(lg) {
      padding: 2.4rem 2.9rem 2.9rem;
      width: 24vw;
    }
    @include breakpoint(xl) {
      padding: 3.2rem 4.4rem 4.4rem;
      width: 14vw;
    }
  }

  // text styles
  h1 {
    @include italic;
    position: relative;
    font-size: 3rem;
    letter-spacing: -0.16px;
    line-height: 1;
    -webkit-text-stroke: 0.32px var(--color--highlight);
    text-stroke: 0.32px var(--color--highlight);
  }

  h1:before {
    content: "\219C";
    position: absolute;
    top: 0;
    left: -2.1rem;
    opacity: 0;
    transition: opacity 300ms ease 100ms;
  }

  @media (pointer: fine) {
    h1:hover:before {
      opacity: 1;
    }
  }

  h2 {
    @include monospace;
    margin: 1rem 0 0;
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

  :deep(article p:first-of-type) {
    text-indent: 0;
  }

  :deep(article p) {
    text-indent: 3ch;
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

  // table styles
  tr {
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    width: 100%;
    font-size: 1.6rem;
    line-height: 1.2;
  }

  td {
    @include sans;
    display: flex;
    height: max-content;
    text-transform: capitalize;
    opacity: 0.82;
  }

  td + td {
    @include monospace;
    opacity: 1;
    text-transform: none;
  }

  tr td:first-of-type {
    flex: 1;
  }

  // Balance styles
  .balance {
    display: flex;
    flex-direction: column;
    border-top: 0.5px solid var(--color--secondary);
    border-bottom: 0.5px solid var(--color--secondary);
    padding: 2.4rem 0;
  }

  .balance li {
    @include monospace;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .label {
    width: 16ch;
  }

  .scale {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    transform: translateY(0.1rem);
  }

  .track {
    width: 100%;
    height: 0.5px;
    background: var(--color--tertiary);
  }

  .dot {
    position: absolute;
    left: 0;
    border-radius: 10px;
    min-width: 0.8rem;
    min-height: 0.8rem;
    background: var(--color--primary);
  }

  .like-counter {
    button {
      margin: 0.8rem 0;
      padding: 0.4rem;
      background: #fff;
    }
  }

  img {
    margin-bottom: 2.4rem;
    border-radius: var(--border-radius--lg);
    width: 100%;
    height: 36vh;
    object-fit: cover;
    pointer-events: none;
    @include breakpoint(md) {
      flex: 1;
      position: sticky;
      top: 1.6rem;
      border-radius: var(--border-radius--sm);
      margin-bottom: 0;
      width: 400px;
      min-height: calc(100vh - 3.2rem);
      max-height: calc(100vh - 3.2rem);
    }
  }
</style>

<script setup>
  const likes = ref(0)

  function incrementLikes() {
    likes.value++
  }
</script>
