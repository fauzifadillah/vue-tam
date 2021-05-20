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
      <div class="col p-4 container-tam container-detail-guest-account">
        <!-- Header -->
        <div class="row">
          <div class="col-auto">
            <h1 class="mb-4">Dashboard</h1>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <router-link :to="'/dashboard/guest-account'">
              <h1 class="mb-4 text-primary">Guest Account</h1>
            </router-link>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <router-link :to="'/dashboard/guest-account/detail'">
              <h1 class="mb-4 text-primary">View Detail</h1>
            </router-link>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <h1 class="mb-4 text-danger">Edit</h1>
          </div>
        </div>
        <!-- Sub Header -->
        <div class="row">
          <div class="col-12 mb-1">Account</div>
          <div class="col-12">
            <h2>Guest Account</h2>
          </div>
        </div>
        <!-- Content -->
        <div class="card p-4">
          <!-- Card Header -->
          <div class="row">
            <div class="col-12">
              <h2>Edit Profile</h2>
            </div>
          </div>
          <hr />
          <!-- User Information -->
          <div class="row">
            <div class="col-3">
              <!-- Profile Picture -->
              <div class="mb-1"><b>Profile Picture</b></div>
              <img src="@/assets/images/dummy-profile.png" alt="profile" />
              <form>
                <div class="form-group mt-3">
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
              </form>
            </div>
            <div class="col-3">
              <!-- Manpower Code -->
              <div class="mb-3">
                <div class="mb-1"><b>Manpower Code</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Code"
                />
              </div>
              <!-- Name -->
              <div class="mb-3">
                <div class="mb-1"><b>Name</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Name"
                />
              </div>
              <!-- Gender -->
              <div class="mb-3">
                <div class="mb-1"><b>Gender</b></div>
                <select class="form-select mt-2" id="gender">
                  <option selected>Choose Your Gender...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <!-- Date of Birth -->
              <div class="mb-3">
                <div class="mb-1"><b>Date of Birth</b></div>
                <div class="mt-2">
                  <datepicker v-model="picked" />
                </div>
              </div>
              <!-- ID Card No. (KTP) -->
              <div class="mb-3">
                <div class="mb-1"><b>ID Card No. (KTP)</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your ID Card"
                />
              </div>
              <!-- Religion -->
              <div class="mb-3">
                <div class="mb-1"><b>Religion</b></div>
                <select class="form-select mt-2" id="religion">
                  <option selected>Choose Your Religion...</option>
                  <option value="muslim">Muslim</option>
                  <option value="hindu">Hindu</option>
                </select>
              </div>
            </div>
            <div class="col-3">
              <!-- Email -->
              <div class="mb-3">
                <div class="mb-1"><b>Email</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Email"
                />
              </div>
              <!-- Phone Number -->
              <div class="mb-3">
                <div class="mb-1"><b>Phone Number</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Phone Number"
                />
              </div>
              <!-- Address -->
              <div class="mb-3">
                <div class="mb-1"><b>Address</b></div>
                <textarea
                  rows="6"
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Address"
                />
              </div>
            </div>
            <div class="col-3">
              <!-- Dealer -->
              <div class="mb-3">
                <div class="mb-1"><b>Dealer</b></div>
                <select class="form-select mt-2" id="dealer">
                  <option selected>Choose Your Dealer...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <!-- Outlet -->
              <div class="mb-3">
                <div class="mb-1"><b>Outlet</b></div>
                <select class="form-select mt-2" id="gender">
                  <option selected>Choose Your Outlet...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <!-- Position -->
              <div class="mb-3">
                <div class="mb-1"><b>Position</b></div>
                <select class="form-select mt-2" id="gender">
                  <option selected>Choose Your Position...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <!-- Card Footer -->
          <div class="row d-flex justify-content-end">
            <div class="col-auto">
              <button
                type="button"
                class="btn btn-sm btn-primary"
                data-toggle="modal"
                data-target="#submitModal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Submit Modal -->
    <div
      class="modal fade"
      id="submitModal"
      tabindex="-1"
      aria-labelledby="submitModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content p-2">
          <div class="modal-header">
            <h2 class="modal-title" id="submitModalLabel">Edit Profile</h2>
            <button
              type="button"
              class="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure to change your profile information?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary">Yes</button>
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
import Datepicker from "vue3-datepicker";
import { ref } from "vue";

export default {
  name: "Edit Detail Guest Account",
  components: {
    Sidebar,
    Navbar,
    Datepicker,
  },
  data() {
    return {
      picked: ref(new Date()),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "Dashboard.scss";
</style>
