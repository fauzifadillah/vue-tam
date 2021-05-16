<template>
  <div>
    <!-- Navbar -->
    <div class="row m-0">
      <div class="col p-0">
        <Navbar />
      </div>
    </div>
    <!-- Sidebar & Main Content -->
    <div class="row m-0">
      <div class="col-auto p-0">
        <Sidebar />
      </div>
      <div class="col p-4 container-home">
        <!-- Header -->
        <h1 class="mb-4">Home</h1>
        <!-- Content -->
        <div class="card p-4">
          <div class="row">
            <div class="col-12">
              <img
                src="@/assets/images/bg-home.png"
                class="col-12"
                alt="background-home"
              />
            </div>
            <div class="col-12 text-center">
              <label for="version">Version 2.11 (20 April 2021)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import "Home.scss";
</style>
