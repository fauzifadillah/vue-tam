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
      <div class="col p-4 container-tam container-release-training">
        <!-- Header -->
        <div class="row">
          <div class="col-auto">
            <h1 class="mb-4">My Learning</h1>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <router-link :to="'/my-learning/release-training'">
              <h1 class="mb-4 text-primary">Release Training</h1>
            </router-link>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <h1 class="mb-4 text-danger">Add Release Training</h1>
          </div>
        </div>
        <!-- Search Bar, Filter and Add Broadcast -->
        <div class="row mb-4">
          <!-- Filter -->
          <div class="col-auto">
            <button type="button" class="btn btn-info text-white">
              Filter
            </button>
          </div>
          <!-- Search Bar -->
          <div class="col-5">
            <form class="d-flex">
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-primary" type="submit">
                <span><i class="fa fa-search" aria-hidden="true"></i></span>
              </button>
            </form>
          </div>
        </div>
        <!-- Nav Tabs -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active px-4 py-3"
              id="course-detail-tab"
              data-toggle="tab"
              href="#course-detail"
              role="tab"
              aria-controls="course-detail"
              aria-selected="true"
              >Course Detail</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link px-4 py-3"
              id="participants-tab"
              data-toggle="tab"
              href="#participants"
              role="tab"
              aria-controls="participants"
              aria-selected="false"
              >Participants</a
            >
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <!-- Course Detail Content -->
          <div
            class="tab-pane fade show active"
            id="course-detail"
            role="tabpanel"
            aria-labelledby="course-detail-tab"
          >
            <div class="card p-4">
              <!-- Course Info -->
              <div class="row">
                <!-- Training Start Date -->
                <div class="col">
                  <div class="mb-1"><b>Training Start Date</b></div>
                  <div class="mt-2">
                    <datepicker v-model="picked" />
                  </div>
                </div>
                <!-- Training End Date -->
                <div class="col">
                  <div class="mb-1"><b>Training End Date</b></div>
                  <div class="mt-2">
                    <datepicker v-model="picked" />
                  </div>
                </div>
                <!-- Batch -->
                <div class="col-1">
                  <div class="mb-3"><b>Batch</b></div>
                  1
                </div>
                <!-- Quota -->
                <div class="col-1">
                  <div class="mb-3"><b>Quota</b></div>
                  100
                </div>
                <!-- Training Location -->
                <div class="col">
                  <div class="mb-3"><b>Training Location</b></div>
                  Online
                </div>
                <!-- Accomodation -->
                <div class="col">
                  <div class="mb-3"><b>Accomodation</b></div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="accomodationCheck"
                    />
                  </div>
                </div>
              </div>
              <div class="my-3">
                <hr />
              </div>
              <!-- Table -->
              <label for="total-row" class="mb-3"
                >Showing 5 of 5 Entry(s)</label
              >
              <div class="table-container">
                <table
                  class="table table-hover table-bordered table-responsive"
                >
                  <thead>
                    <tr>
                      <th scope="col">
                        <div class="row">
                          <div class="col">Phase</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col" style="width: 20%">
                        <div class="row">
                          <div class="col">Module Name</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col">
                        <div class="row">
                          <div class="col">Training Date</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col" style="width: 12.5%">
                        <div class="row">
                          <div class="col">Time</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col" style="width: 15%">
                        <div class="row">
                          <div class="col">Coach Name</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col">
                        <div class="row">
                          <div class="col">Teaching Time</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col">
                        <div class="row">
                          <div class="col">Points</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Item 1 -->
                    <tr>
                      <td>Pre</td>
                      <td>Lorem Ipsum Dolor Sit Amet</td>
                      <td>19/02/2021</td>
                      <td>10:00 - 12:00</td>
                      <td>Fauzi Ojoy</td>
                      <td>60</td>
                      <td>100</td>
                    </tr>
                    <!-- Item 2 -->
                    <tr>
                      <td>Pre</td>
                      <td>Lorem Ipsum Dolor Sit Amet</td>
                      <td>19/02/2021</td>
                      <td>10:00 - 12:00</td>
                      <td>Fauzi Ojoy</td>
                      <td>60</td>
                      <td>100</td>
                    </tr>
                    <!-- Item 3 -->
                    <tr>
                      <td>Pre</td>
                      <td>Lorem Ipsum Dolor Sit Amet</td>
                      <td>19/02/2021</td>
                      <td>10:00 - 12:00</td>
                      <td>Fauzi Ojoy</td>
                      <td>60</td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Table Footer -->
              <div class="row mt-2">
                <!-- Set Showed Data Per Page -->
                <div class="col row">
                  <div class="col-auto d-flex align-items-center">Show</div>
                  <div class="col-2">
                    <select
                      class="form-select show-entries"
                      aria-label="select"
                    >
                      <option selected>5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                  <div class="col d-flex align-items-center">Entries</div>
                </div>
                <!-- Pagination -->
                <div class="col-auto d-flex align-items-center">
                  <v-pagination
                    v-model="page"
                    :pages="10"
                    :range-size="1"
                    active-color="#0085CA"
                    @update:modelValue="updateHandler"
                  />
                </div>
              </div>
            </div>
            <!-- Total Summary -->
            <div class="card p-4 mt-4">
              <div class="row">
                <!-- Total Module -->
                <div class="col">
                  <div class="mb-1"><b>Total Module</b></div>
                  10
                </div>
                <!-- Total Time -->
                <div class="col">
                  <div class="mb-1"><b>Total Time</b></div>
                  580
                </div>
                <!-- Total Score -->
                <div class="col">
                  <div class="mb-1"><b>Total Score</b></div>
                  300
                </div>
                <!-- Total Point -->
                <div class="col">
                  <div class="mb-1"><b>Total Point</b></div>
                  100
                </div>
              </div>
            </div>
          </div>

          <!-- Participants Content -->
          <div
            class="tab-pane fade"
            id="participants"
            role="tabpanel"
            aria-labelledby="participants-tab"
          >
            <div class="card p-4">
              <!-- Participants Label -->
              <div class="row">
                <!-- Left -->
                <div class="col-6">
                  <!-- Position Status -->
                  <div class="card-participants-label p-3">
                    <!-- Title Label -->
                    <div class="mb-2 row">
                      <div class="col">
                        <b>Position Status</b>
                      </div>
                    </div>
                    <!-- Content Label -->
                    <div class="row mx-0 text-white">
                      <!-- Item 1 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-disabled
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Permanent</div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <!-- Item 2 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-disabled
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Guest Account</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Area -->
                  <div class="card-participants-label p-3 mt-4">
                    <!-- Title Label -->
                    <div class="mb-2 row">
                      <div class="col-auto d-flex align-items-center">
                        <b>Area</b>
                      </div>
                      <div class="col px-0">
                        <button type="button" class="btn">
                          <span
                            ><i class="fa fa-plus-circle" aria-hidden="true"></i
                          ></span>
                        </button>
                      </div>
                    </div>
                    <!-- Content Label -->
                    <div class="row mx-0 text-white">
                      <!-- Item 1 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Area 1</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <!-- Item 2 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Area 2</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <!-- Item 3 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Area 3</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <!-- Item 4 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Area 4</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <!-- Item 5 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Area Wakwkawkak</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                    </div>
                  </div>
                  <!-- Province -->
                  <div class="card-participants-label p-3 mt-4">
                    <!-- Title Label -->
                    <div class="mb-2 row">
                      <div class="col-auto d-flex align-items-center">
                        <b>Province</b>
                      </div>
                      <div class="col px-0">
                        <button type="button" class="btn">
                          <span
                            ><i class="fa fa-plus-circle" aria-hidden="true"></i
                          ></span>
                        </button>
                      </div>
                    </div>
                    <!-- Content Label -->
                    <div class="row mx-0 text-white">
                      <!-- Item 1 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Nanggroe Aceh Darussalam (NAD)</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <!-- Item 2 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Jawa Barat</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <!-- Item 3 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Jama Timur</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <!-- Item 4 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Kepulauan Riau</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                      <!-- Item 5 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">DKI Jakarta</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                    </div>
                  </div>
                  <!-- City -->
                  <div class="card-participants-label p-3 mt-4">
                    <!-- Title Label -->
                    <div class="mb-2 row">
                      <div class="col-auto d-flex align-items-center">
                        <b>City</b>
                      </div>
                      <div class="col px-0">
                        <button type="button" class="btn">
                          <span
                            ><i class="fa fa-plus-circle" aria-hidden="true"></i
                          ></span>
                        </button>
                      </div>
                    </div>
                    <!-- Content Label -->
                    <div class="row mx-0 text-white">
                      <!-- Item 1 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Jakarta Timur</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                    </div>
                  </div>
                </div>
                <!-- Right -->
                <div class="col-6">
                  <!-- Position -->
                  <div class="card-participants-label p-3">
                    <!-- Title Label -->
                    <div class="mb-2 row">
                      <div class="col-auto d-flex align-items-center">
                        <b>Position</b>
                      </div>
                      <div class="col px-0">
                        <button type="button" class="btn">
                          <span
                            ><i class="fa fa-plus-circle" aria-hidden="true"></i
                          ></span>
                        </button>
                      </div>
                    </div>
                    <!-- Content Label -->
                    <div class="row mx-0 text-white">
                      <!-- Item 1 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Officer</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                    </div>
                  </div>
                  <!-- Dealer -->
                  <div class="card-participants-label p-3 mt-4">
                    <!-- Title Label -->
                    <div class="mb-2 row">
                      <div class="col-auto d-flex align-items-center">
                        <b>Dealer</b>
                      </div>
                      <div class="col px-0">
                        <button type="button" class="btn">
                          <span
                            ><i class="fa fa-plus-circle" aria-hidden="true"></i
                          ></span>
                        </button>
                      </div>
                    </div>
                    <!-- Content Label -->
                    <div class="row mx-0 text-white">
                      <!-- Item 1 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">AUTO 2000</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                    </div>
                  </div>
                  <!-- Outlet -->
                  <div class="card-participants-label p-3 mt-4">
                    <!-- Title Label -->
                    <div class="mb-2 row">
                      <div class="col-auto d-flex align-items-center">
                        <b>Outlet</b>
                      </div>
                      <div class="col px-0">
                        <button type="button" class="btn">
                          <span
                            ><i class="fa fa-plus-circle" aria-hidden="true"></i
                          ></span>
                        </button>
                      </div>
                    </div>
                    <!-- Content Label -->
                    <div class="row mx-0 text-white">
                      <!-- Item 1 -->
                      <div class="col-auto mb-2">
                        <div
                          class="
                            label-release-training
                            row
                            bg-primary
                            px-2
                            py-1
                          "
                        >
                          <div class="col">Agung Toyota Bagan Batu</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-times" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </div>
                      &nbsp;&nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Action -->
          <div class="card p-4 mt-4">
            <div class="row d-flex justify-content-end">
              <div class="col-auto">
                <button type="button" class="btn btn-sm btn-danger">
                  Close
                </button>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-sm btn-success">
                  Save
                </button>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-sm btn-info">
                  Send Invitation
                </button>
              </div>
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
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  name: "Add Release Training",
  components: {
    Sidebar,
    Navbar,
    Datepicker,
    VPagination,
  },
  data() {
    return {
      page: 1,
      picked: ref(new Date()),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "MyLearning.scss";
</style>
