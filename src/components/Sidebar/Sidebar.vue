<template>
  <div id="accordion" class="container-sidebar">
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
      <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/dashboard-icon.png"
              alt="dashboard"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span class="glyphicon glyphicon-folder-close"> Dashboard</span>
          </div>
        </div>
      </a>
      <div id="collapseOne" class="panel-collapse collapse in">
        <div class="row m-0">
          <router-link :to="'report'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center">
                <img
                  src="@/assets/icon/report-icon.png"
                  alt="report"
                  height="24"
                />
              </div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 1</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'report'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center">
                <img
                  src="@/assets/icon/report-icon.png"
                  alt="report"
                  height="24"
                />
              </div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 2</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Report -->
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

    <!-- Access Control -->
    <div class="row m-0">
      <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/access-control-icon.png"
              alt="access-control"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span class="glyphicon glyphicon-th"> Access Control</span>
          </div>
        </div>
      </a>
      <div id="collapseTwo" class="panel-collapse collapse">
        <div class="row m-0">
          <router-link :to="'report'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center">
                <img
                  src="@/assets/icon/report-icon.png"
                  alt="report"
                  height="24"
                />
              </div>
              <div class="col-10 d-flex align-items-center">
                <span>Report</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'report'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center">
                <img
                  src="@/assets/icon/report-icon.png"
                  alt="report"
                  height="24"
                />
              </div>
              <div class="col-10 d-flex align-items-center">
                <span>Report</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Survey and Assessment -->
    <div class="row m-0">
      <router-link :to="'survey-and-assessment'">
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
