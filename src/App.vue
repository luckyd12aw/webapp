<script setup>
</script>

<template>
  <!-- menu -->
  <div class="menu">
    <div class="menu-left">
      <img class="logo-img" src="./assets/logo.png" alt="logo" />
      <div class="logo-name">LuckyDraw</div>
      <button class="treasury-button">Treasury 10.1234 ETH</button>
    </div>
    <div class="menu-right">
      <router-link
        to="/draw"
        :class="{
          'menu-draw-button': true,
          active: $route.path === '/draw' || $route.path === '/',
        }"
        >Draw</router-link
      >
      <router-link
        to="/profile"
        :class="{
          'menu-profile-button': true,
          active: $route.path === '/profile',
        }"
        >Profile</router-link
      >
      <button class="wallet-button">Connect</button>
    </div>
  </div>

  <router-view></router-view>
</template>

<style>
/* menu */
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  font-family: "Inter";
  font-style: normal;

  /* margin-bottom: 10px; */
}

.menu-left,
.menu-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  width: 60px;
}

.logo-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;

  color: #ffc342;

  margin-right: 16px;
}

.treasury-button {
  width: 160px;
  height: 34px;
  background: #7977c4;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  color: white;
}

body {
  height: 100vh;
  background: linear-gradient(to bottom, #707398 14.12%, #b2b4d6 86.73%);
}

.menu-draw-button {
  font-size: 18px;
  text-decoration: none;

  color: black;
  border-color: transparent;
  background-color: transparent;

  cursor: pointer;

  margin-right: 16px;
}

.menu-profile-button {
  font-size: 18px;
  text-decoration: none;

  color: black;
  border-color: transparent;
  background-color: transparent;

  cursor: pointer;

  margin-right: 16px;
}

.active {
  font-weight: 800;
}

.wallet-button {
  width: 160px;
  height: 34px;
  background: #d8943c;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  color: white;
}

/* details */
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.details-head,
.details-sub {
  width: 100%;
}

.details-head {
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 4px;
}

.details-sub {
  /* margin-bottom: 20px; */
  margin-bottom: 16px;
}
</style>
