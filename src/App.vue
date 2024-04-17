<script setup>
</script>

<template>
  <router-view />
  <div class="menu">
    <router-link to="/draw">Draw</router-link>
    <router-link to="/profile">Profile</router-link>

    <!-- <RouterLink to="/draw">Draw</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink> -->
  </div>

  <main>
    <div class="main">
      <router-view></router-view>
    </div>
  </main>
</template>

<style></style>
