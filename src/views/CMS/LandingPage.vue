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
      <div class="col p-4 container-tam container-landing-page">
        <!-- Header -->
        <div class="row">
          <div class="col-auto">
            <h1 class="mb-4">CMS</h1>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <h1 class="mb-4 text-primary">Landing Page</h1>
          </div>
        </div>
        <!-- Content -->
        <div class="card p-4">
          <!-- Content Header -->
          <div class="row">
            <div class="col">
              <h2>Slide</h2>
            </div>
            <div class="col-auto">
              <button
                type="button"
                class="btn btn-sm btn-primary"
                data-toggle="modal"
                data-target="#addItemModal"
              >
                Add New Landing Page
              </button>
            </div>
          </div>
          <hr />
          <!-- Content Button -->
          <div class="px-4">
            <div class="row mb-4">
              <!-- Checkbox -->
              <div class="col-auto">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </div>
              <!-- Total Selected Entry -->
              <div class="col">Selecting 2 of 3 Entry(s)</div>
              <!-- Button Delete -->
              <div class="col-auto">
                <button type="button" class="btn btn-sm btn-outline-danger">
                  Delete
                </button>
              </div>
              <!-- Button Submit -->
              <div class="col-auto">
                <button type="button" class="btn btn-sm btn-outline-info">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <!-- Card Item Content -->
          <draggable v-model="items" dropZoneId="1" class="drop-zone">
            <template v-slot:item="{ item }">
              <!-- Item 1 -->
              <div class="card-item p-4 mb-4">
                <div class="row">
                  <!-- Checkbox -->
                  <div class="col-auto">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <!-- Image -->
                  <div class="col-auto">
                    <img
                      src="@/assets/images/dummy-profile.png"
                      alt="profile"
                    />
                  </div>
                  <!-- Description -->
                  <div class="col">
                    <b>{{ item.title }}</b>
                    <p class="mt-3">
                      Lorem Ipsum Sit Amet Dolor Lorem Ipsum Sit Amet Dolor
                      Lorem Ipsum Sit Amet Dolor Lorem Ipsum Sit Amet Dolor
                      Lorem Ipsum Sit Amet Dolor Lorem Ipsum Sit Amet Dolor
                      Lorem Ipsum Sit Amet Dolor Lorem Ipsum Sit Amet Dolor
                    </p>
                  </div>
                  <!-- Action -->
                  <div class="col-auto">
                    <!-- Toggle -->
                    <div class="row d-flex justify-content-end mb-4">
                      <div class="col-auto d-flex align-items-center">
                        <label for="flexSwitchCheckChecked">Off</label>
                      </div>
                      <div class="col-auto px-0 d-flex align-items-center">
                        <div class="form-check pr-0 form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            checked
                          />
                        </div>
                      </div>
                      <div class="col-auto d-flex align-items-center">
                        <label for="flexSwitchCheckChecked">On</label>
                      </div>
                    </div>
                    <!-- Button -->
                    <div class="row">
                      <!-- Edit -->
                      <div class="col">
                        <button type="button" class="btn btn-sm btn-primary">
                          Edit
                        </button>
                      </div>
                      <!-- Delete -->
                      <div class="col">
                        <button type="button" class="btn btn-sm btn-danger">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
    <!-- Add Item Modal -->
    <div
      class="modal fade"
      id="addItemModal"
      tabindex="-1"
      aria-labelledby="addItemModalLabel"
      aria-hidden="true"
    >
      <div
        class="
          modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable
        "
      >
        <div class="modal-content p-2">
          <div class="modal-header">
            <h2 class="modal-title" id="addItemModalLabel">
              Add New Landing Page Slide
            </h2>
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
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-success">Save</button>
            <button type="button" class="btn btn-primary">Submit</button>
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
import Draggable from "vue3-draggable";

export default {
  name: "Landing Page",
  components: {
    Sidebar,
    Navbar,
    Draggable,
  },
  data() {
    return {
      page: 1,
      items: [
        {
          id: 1,
          title: "Description 1",
        },
        {
          id: 2,
          title: "Description 2",
        },
        {
          id: 3,
          title: "Description 3",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "CMS.scss";
</style>
