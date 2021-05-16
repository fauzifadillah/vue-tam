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
      <div class="col p-4 container-dashboard">
        <!-- Header -->
        <div class="row">
          <div class="col-auto">
            <h1 class="mb-4">Dashboard</h1>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <h1 class="mb-4 text-primary">Guest Account</h1>
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
            <div class="col">
              <h2>Profile</h2>
            </div>
            <div class="col-auto">
              <router-link :to="'/dashboard/guest-account/edit'">
                <button type="button" class="btn btn-sm btn-success">
                  Edit
                </button>
              </router-link>
            </div>
            <div class="col-auto">
              <button type="button" class="btn btn-sm btn-primary">
                Download
              </button>
            </div>
          </div>
          <hr />
          <!-- User Information -->
          <div class="row">
            <div class="col-3">
              <!-- Profile Picture -->
              <div class="mb-1"><b>Profile Picture</b></div>
              <img src="@/assets/images/dummy-profile.png" alt="profile" />
            </div>
            <div class="col-3">
              <!-- Manpower Code -->
              <div class="mb-3">
                <div class="mb-1"><b>Manpower Code</b></div>
                123456890000
              </div>
              <!-- Name -->
              <div class="mb-3">
                <div class="mb-1"><b>Name</b></div>
                John Doe
              </div>
              <!-- Gender -->
              <div class="mb-3">
                <div class="mb-1"><b>Gender</b></div>
                Male
              </div>
              <!-- Date of Birth -->
              <div class="mb-3">
                <div class="mb-1"><b>Date of Birth</b></div>
                04 April 1987
              </div>
              <!-- ID Card No. (KTP) -->
              <div class="mb-3">
                <div class="mb-1"><b>ID Card No. (KTP)</b></div>
                210401123123
              </div>
              <!-- Religion -->
              <div class="mb-3">
                <div class="mb-1"><b>Religion</b></div>
                Hindu
              </div>
            </div>
            <div class="col-3">
              <!-- Email -->
              <div class="mb-3">
                <div class="mb-1"><b>Email</b></div>
                johndoe@gmail.com
              </div>
              <!-- Phone Number -->
              <div class="mb-3">
                <div class="mb-1"><b>Phone Number</b></div>
                0812 2121 293
              </div>
              <!-- Address -->
              <div class="mb-3">
                <div class="mb-1"><b>Address</b></div>
                Jl. Pamitran Gg. Tambak No.55 RT/RW 003/003 Kelurahan Kejaksaan,
                Kecamatan Kejaksaan Jakarta Selatan
              </div>
            </div>
            <div class="col-3">
              <!-- Dealer -->
              <div class="mb-3">
                <div class="mb-1"><b>Dealer</b></div>
                Auto 2000
              </div>
              <!-- Outlet -->
              <div class="mb-3">
                <div class="mb-1"><b>Outlet</b></div>
                Cilandak
              </div>
              <!-- Position -->
              <div class="mb-3">
                <div class="mb-1"><b>Position</b></div>
                Engineer
              </div>
              <!-- Validity Period -->
              <div class="mb-3">
                <div class="mb-1"><b>Validity Period</b></div>
                09 April 2021 08:00
              </div>
            </div>
          </div>
          <hr />
          <!-- Card Footer -->
          <div class="row d-flex justify-content-end">
            <div class="col-auto">
              <button
                type="button"
                class="btn btn-sm btn-danger"
                data-toggle="modal"
                data-target="#suspendAccountModal"
              >
                Suspend Account
              </button>
            </div>
            <div class="col-auto">
              <button
                type="button"
                class="btn btn-sm btn-success"
                data-toggle="modal"
                data-target="#extendAccountModal"
              >
                Extend Account
              </button>
            </div>
            <div class="col-auto">
              <button
                type="button"
                class="btn btn-sm btn-warning"
                data-toggle="modal"
                data-target="#upgradeAccountModal"
              >
                Upgrade Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Suspend Account Modal -->
    <div
      class="modal fade"
      id="suspendAccountModal"
      tabindex="-1"
      aria-labelledby="suspendAccountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content p-2">
          <div class="modal-header">
            <h2 class="modal-title" id="suspendAccountModalLabel">
              Suspend Account
            </h2>
            <button
              type="button"
              class="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure to suspend this John Doe's account?
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
    <!-- Extend Account Modal -->
    <div
      class="modal fade"
      id="suspendAccountModal"
      tabindex="-1"
      aria-labelledby="suspendAccountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content p-2">
          <div class="modal-header">
            <h2 class="modal-title" id="suspendAccountModalLabel">
              Suspend Account
            </h2>
            <button
              type="button"
              class="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure to extend period to this John Doe's account ?
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
    <!-- Upgrade Account Modal -->
    <div
      class="modal fade"
      id="upgradeAccountModal"
      tabindex="-1"
      aria-labelledby="upgradeAccountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content p-2">
          <div class="modal-header">
            <h2 class="modal-title" id="upgradeAccountModalLabel">
              Upgrade Account
            </h2>
            <button
              type="button"
              class="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- Name -->
              <div class="col-6 mb-2">
                <div class="mb-1"><b>Name</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Name"
                />
              </div>
              <!-- Phone Number -->
              <div class="col-6 mb-2">
                <div class="mb-1"><b>Phone Number</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Phone Number"
                />
              </div>
              <!-- Email -->
              <div class="col-6 mb-2">
                <div class="mb-1"><b>Email</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Email"
                />
              </div>
              <!-- Dealer -->
              <div class="col-6 mb-2">
                <div class="mb-1"><b>Dealer</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Dealer"
                />
              </div>
              <!-- Identify -->
              <div class="col-6 mb-2">
                <div class="mb-1"><b>Identify</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Identify"
                />
              </div>
              <!-- Outlet -->
              <div class="col-6 mb-2">
                <div class="mb-1"><b>Outlet</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Outlet"
                />
              </div>
              <!-- Position -->
              <div class="col-6 mb-2">
                <div class="mb-1"><b>Position</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Your Position"
                />
              </div>
            </div>
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

export default {
  name: "GuestAccount",
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import "Dashboard.scss";
</style>
