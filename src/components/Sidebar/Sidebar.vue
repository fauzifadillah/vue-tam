<template>
  <div id="accordion" class="container-sidebar">
    <!-- Home -->
    <div class="row m-0 pt-3">
      <router-link :to="'/home'">
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
      <a data-toggle="collapse" data-parent="#accordion" href="#dashboard">
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
      <div
        id="dashboard"
        class="px-0 panel-collapse collapse in"
        :class="
          currentRouteName === 'Management' ||
          currentRouteName === 'Operation' ||
          currentRouteName === 'Account' ||
          currentRouteName === 'GuestAccount'
            ? 'show'
            : ''
        "
      >
        <div class="row m-0">
          <router-link :to="'/dashboard/management'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Management</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/dashboard/operation'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Operation</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/dashboard/account'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Account</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/dashboard/guest-account'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Guest Account</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Report -->
    <div class="row m-0">
      <router-link :to="'/report'">
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
      <a data-toggle="collapse" data-parent="#accordion" href="#access-control">
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
      <div
        id="access-control"
        class="panel-collapse collapse px-0"
        :class="
          currentRouteName === 'Dummy' || currentRouteName === 'DummyAgain'
            ? 'show'
            : ''
        "
      >
        <div class="row m-0">
          <router-link :to="'/access-control/dummy'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 1</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/access-control/dummy'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 2</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Master Data -->
    <div class="row m-0">
      <a data-toggle="collapse" data-parent="#accordion" href="#master-data">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/dashboard-icon.png"
              alt="dashboard"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span class="glyphicon glyphicon-folder-close"> Master Data</span>
          </div>
        </div>
      </a>
      <div
        id="master-data"
        class="px-0 panel-collapse collapse in"
        :class="
          currentRouteName === 'Course' ||
          currentRouteName === 'Module' ||
          currentRouteName === 'Topic' ||
          currentRouteName === 'Competency' ||
          currentRouteName === 'KeyAction' ||
          currentRouteName === 'CompetencyMapping'
            ? 'show'
            : ''
        "
      >
        <div class="row m-0">
          <router-link :to="'/master-data/course'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Course</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/master-data/module'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Module</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/master-data/topic'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Topic</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/master-data/competency'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Competency</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/master-data/key-action'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Key Action</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/master-data/competency-mapping'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Competency Mapping</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- My Learning -->
    <div class="row m-0">
      <a data-toggle="collapse" data-parent="#accordion" href="#my-learning">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/my-learning-icon.png"
              alt="my-learning"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span class="glyphicon glyphicon-folder-close"> My Learning</span>
          </div>
        </div>
      </a>
      <div
        id="my-learning"
        class="px-0 panel-collapse collapse in"
        :class="
          currentRouteName === 'BillingCode' ||
          currentRouteName === 'Dormitory' ||
          currentRouteName === 'SetupLearning' ||
          currentRouteName === 'Task' ||
          currentRouteName === 'ReleaseTraining' ||
          currentRouteName === 'ApprovalContent' ||
          currentRouteName === 'ApprovalMapping' ||
          currentRouteName === 'ApprovalTraining' ||
          currentRouteName === 'SetupTopCourse' ||
          currentRouteName === 'SetupTimePoint' ||
          currentRouteName === 'SetupTsl' ||
          currentRouteName === 'TrainingProcess' ||
          currentRouteName === 'ApprovalContent'
            ? 'show'
            : ''
        "
      >
        <div class="row m-0">
          <router-link :to="'/my-learning/billing-code'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Billing Code</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-learning/dormitory'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Dormitory</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-learning/setup-learning'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Setup Learning</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-learning/task'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Task</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-learning/release-training'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Release Training</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-learning/approval-content'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Approval Content</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-learning/approval-mapping'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Approval Mapping</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-learning/approval-training'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Approval Training</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-learning/setup-top-course'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Setup Top 5 Course</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-learning/setup-time-point'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Setup Time Point</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-learning/setup-tsl'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Setup TSL</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-learning/training-process'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Training Process</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- My Complaint -->
    <div class="row m-0">
      <a data-toggle="collapse" data-parent="#accordion" href="#my-complaint">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/my-complaint-icon.png"
              alt="my-complaint"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span class="glyphicon glyphicon-th"> My Complaint</span>
          </div>
        </div>
      </a>
      <div
        id="my-complaint"
        class="panel-collapse collapse px-0"
        :class="
          currentRouteName === 'Complaint' || currentRouteName === 'Category'
            ? 'show'
            : ''
        "
      >
        <div class="row m-0">
          <router-link :to="'/my-complaint/complaint'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Complaint</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-complaint/category'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Category</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Announcement -->
    <div class="row m-0">
      <a data-toggle="collapse" data-parent="#accordion" href="#announcement">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/announcement-icon.png"
              alt="announcement"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span class="glyphicon glyphicon-th"> Announcement</span>
          </div>
        </div>
      </a>
      <div
        id="announcement"
        class="panel-collapse collapse px-0"
        :class="
          currentRouteName === 'Dummy' || currentRouteName === 'DummyAgain'
            ? 'show'
            : ''
        "
      >
        <div class="row m-0">
          <router-link :to="'/announcement/dummy'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 1</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/announcement/dummy'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 2</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Event -->
    <div class="row m-0">
      <a data-toggle="collapse" data-parent="#accordion" href="#event">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img src="@/assets/icon/event-icon.png" alt="event" height="24" />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span class="glyphicon glyphicon-th"> Event</span>
          </div>
        </div>
      </a>
      <div
        id="event"
        class="panel-collapse collapse px-0"
        :class="
          currentRouteName === 'Dummy' || currentRouteName === 'DummyAgain'
            ? 'show'
            : ''
        "
      >
        <div class="row m-0">
          <router-link :to="'/event/dummy'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 1</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/event/dummy'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 2</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- CMS -->
    <div class="row m-0">
      <a data-toggle="collapse" data-parent="#accordion" href="#cms">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img src="@/assets/icon/cms-icon.png" alt="cms" height="24" />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span class="glyphicon glyphicon-th"> CMS</span>
          </div>
        </div>
      </a>
      <div
        id="cms"
        class="panel-collapse collapse px-0"
        :class="
          currentRouteName === 'LandingPage' ||
          currentRouteName === 'Onboarding' ||
          currentRouteName === 'Grouping' ||
          currentRouteName === 'SplashScreen' ||
          currentRouteName === 'Announcement' ||
          currentRouteName === 'Guide'
            ? 'show'
            : ''
        "
      >
        <div class="row m-0">
          <router-link :to="'/cms/landing-page'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Landing Page</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/cms/onboarding'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Onboarding</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/cms/grouping'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Grouping</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/cms/splash-screen'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Splash Screen</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/cms/announcement'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Announcement</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/cms/guide'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Guide</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Survey and Assessment -->
    <div class="row m-0">
      <a
        data-toggle="collapse"
        data-parent="#accordion"
        href="#survey-and-assessment"
      >
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/survey-and-assessment-icon.png"
              alt="survey-and-assessment"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span class="glyphicon glyphicon-th"> Survey & Assessment</span>
          </div>
        </div>
      </a>
      <div
        id="survey-and-assessment"
        class="panel-collapse collapse px-0"
        :class="
          currentRouteName === 'Dummy' || currentRouteName === 'DummyAgain'
            ? 'show'
            : ''
        "
      >
        <div class="row m-0">
          <router-link :to="'/survey-and-assessment/dummy'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 1</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/survey-and-assessment/dummy'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 2</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- My News -->
    <div class="row m-0">
      <a data-toggle="collapse" data-parent="#accordion" href="#my-news">
        <div class="row py-2">
          <div class="col-2 pl-0 d-flex align-items-center">
            <img
              src="@/assets/icon/my-news-icon.png"
              alt="my-news"
              height="24"
            />
          </div>
          <div class="col-10 d-flex align-items-center">
            <span class="glyphicon glyphicon-th"> My News</span>
          </div>
        </div>
      </a>
      <div
        id="my-news"
        class="panel-collapse collapse px-0"
        :class="
          currentRouteName === 'Dummy' || currentRouteName === 'DummyAgain'
            ? 'show'
            : ''
        "
      >
        <div class="row m-0">
          <router-link :to="'/my-news/dummy'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 1</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="row m-0">
          <router-link :to="'/my-news/dummy'">
            <div class="row py-2">
              <div class="col-2 pl-0 d-flex align-items-center"></div>
              <div class="col-10 d-flex align-items-center">
                <span>Item 2</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Reward -->
    <div class="row m-0">
      <router-link :to="'/rewards'">
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
    <div class="row m-0 pb-3">
      <router-link :to="'/push-notification'">
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
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "Sidebar.scss";
</style>
