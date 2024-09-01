<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post._id"
      @mousemove="handleMouseMove($event, post._id)"
      @mouseleave="handleMouseLeave(post._id)"
    >
      <NuxtLink :to="post._path">
        <span
          class="label"
          :style="labelStyles[post._id]"
        >
          {{ post.title }}
        </span>
        <img
          :src="post.figure"
          :alt="post.title"
        />
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";
  @import "/assets/style/type.scss";

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 3.2rem;
    width: 100%;
    height: max-content;
    @include breakpoint(md) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      grid-column-gap: 1.6rem;
      grid-row-gap: 1.6rem;
    }
  }

  a,
  li {
    cursor: none;
  }

  li {
    position: relative;
    border-radius: var(--border-radius--lg);
    overflow: hidden;
    @include breakpoint(md) {
      height: max-content;
    }
  }

  .label {
    @include serif;
    display: none;
    place-items: center;
    position: absolute;
    z-index: var(--z1);
    top: 0;
    left: 0;
    border-radius: 20rem;
    width: 13.2rem;
    height: 13.2rem;
    text-align: center;
    line-height: 1.3;
    color: var(--color--bg);
    background: var(--color--primary);
    box-shadow: var(--shadow--xs);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<script setup>
  const posts = await queryContent("/catalog").sort({ key: 1 }).find()
  const labelStyles = reactive({})

  const handleMouseMove = (event, postId) => {
    const li = event.currentTarget
    const rect = li.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    labelStyles[postId] = {
      display: "grid",
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      cursor: "none",
    }
  }

  const handleMouseLeave = (postId) => {
    labelStyles[postId] = {
      display: "none",
    }
  }
</script>
