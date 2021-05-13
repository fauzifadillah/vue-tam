<template>
  <div class="container-navbar">
    <div class="row m-0 py-2 px-4">
      <!-- Logo -->
      <div class="col-auto d-flex align-items-center">
        <img src="@/assets/images/app-logo.png" alt="app-logo" height="45" />
      </div>
      <!-- Hamburger -->
      <div class="col d-flex align-items-center">
        <img src="@/assets/icon/hamburger-icon.png" alt="hamburger" />
      </div>
      <!-- Icon -->
      <div class="col-auto d-flex align-items-center">
        <img src="@/assets/icon/username-icon.png" alt="username" />
      </div>
      <!-- Username -->
      <div class="col-auto d-flex align-items-center">
        <p class="mb-0"><b>Hello</b>, Keke Rahmawati</p>
      </div>
      <!-- Logout Button -->
      <div class="col-auto d-flex align-items-center">Logout</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import "Navbar.scss";
</style>
