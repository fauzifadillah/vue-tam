<template>
  <div class="container-sidebar">
    <!-- Home -->
    <div class="row m-0 pt-3">
      <router-link :to="'home'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img src="@/assets/icon/home-icon.png" alt="home" height="24" />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>Home</span>
          </div>
        </div>
      </router-link>
    </div>

    <!-- Dashboard -->
    <div class="row m-0">
      <router-link :to="'dashboard'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/dashboard-icon.png"
              alt="dashboard"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>Dashboard</span>
          </div>
        </div>
      </router-link>
    </div>

    <div class="row m-0">
      <router-link :to="'report'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img src="@/assets/icon/report-icon.png" alt="report" height="24" />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>Report</span>
          </div>
        </div>
      </router-link>
    </div>

    <div class="row m-0">
      <router-link :to="'belom'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/survey-and-assessment-icon.png"
              alt="report"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>Survey & Assessment</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
@import "Sidebar.scss";
</style>
