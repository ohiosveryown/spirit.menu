<template>
  <div>
    <ul>
      <li
        v-for="post in posts"
        :key="post._id"
      >
        <NuxtLink :to="post._path">
          {{ post.title }}
          <img
            :src="post.figure"
            :alt="post.title"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  // const { data: posts } = await useAsyncData("posts", () =>
  //   queryContent().find()
  // )
  const posts = await queryContent("/catalog").sort({ key: 1 }).find()
</script>
