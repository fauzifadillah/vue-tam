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

    <!-- My Learning -->
    <div class="row m-0">
      <router-link :to="'my-learning'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/my-learning-icon.png"
              alt="my learning"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>My Learning</span>
          </div>
        </div>
      </router-link>
    </div>

    <!-- My Complaint -->
    <div class="row m-0">
      <router-link :to="'my-complaint'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/my-complaint-icon.png"
              alt="my complaint"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>My Complaint</span>
          </div>
        </div>
      </router-link>
    </div>

    <!-- Announcement -->
    <div class="row m-0">
      <router-link :to="'announcement'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/announcement-icon.png"
              alt="report"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>Announcement</span>
          </div>
        </div>
      </router-link>
    </div>

    <!-- Event -->
    <div class="row m-0">
      <router-link :to="'event'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img src="@/assets/icon/event-icon.png" alt="report" height="24" />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>Event</span>
          </div>
        </div>
      </router-link>
    </div>

    <!-- CMS -->
    <div class="row m-0">
      <router-link :to="'cms'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img src="@/assets/icon/cms-icon.png" alt="report" height="24" />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>CMS</span>
          </div>
        </div>
      </router-link>
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

    <!-- My News -->
    <div class="row m-0">
      <router-link :to="'my-news'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/my-news-icon.png"
              alt="report"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>My News</span>
          </div>
        </div>
      </router-link>
    </div>

    <!-- Reward -->
    <div class="row m-0">
      <router-link :to="'rewards'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/rewards-icon.png"
              alt="report"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>Rewards</span>
          </div>
        </div>
      </router-link>
    </div>

    <!-- Push Notification -->
    <div class="row m-0">
      <router-link :to="'push-notification'">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/push-notification-icon.png"
              alt="report"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span>Push Notification</span>
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
