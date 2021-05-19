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
      <div class="col p-4 container-tam container-manage-training-list">
        <!-- Header -->
        <div class="row">
          <div class="col-auto">
            <h1 class="mb-4">My Learning</h1>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <router-link :to="'/my-learning/training-process'">
              <h1 class="mb-4 text-primary">Training Process</h1>
            </router-link>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <h1 class="mb-4 text-danger">Manage Training List</h1>
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
        <!-- Content -->
        <div class="row">
          <!-- Training Info -->
          <div class="col-12 mb-4">
            <div class="card p-4">
              <div class="row">
                <!-- Course Info -->
                <div class="col">
                  <div class="mb-1"><b>Course</b></div>
                  Body Repair-New Step 2 (Pro Tech)
                </div>
                <!-- Program Type -->
                <div class="col">
                  <div class="mb-1"><b>Program Type</b></div>
                  Mandatory Training Program
                </div>
                <!-- Batch -->
                <div class="col-2">
                  <div class="mb-1"><b>Batch</b></div>
                  2
                </div>
                <!-- Training Date -->
                <div class="col">
                  <div class="mb-1"><b>Training Date</b></div>
                  05/02/2021 - 10/02/2021
                </div>
              </div>
            </div>
          </div>
          <!-- Waiting List -->
          <div class="col-md-6">
            <!-- Table -->
            <div class="card p-4">
              <!-- Table Header -->
              <div class="row">
                <div class="col">
                  <h2>Waiting List</h2>
                </div>
                <div class="col-auto">
                  <button type="button" class="btn btn-sm btn-primary">
                    Move All to Quota
                  </button>
                </div>
              </div>
              <hr />
              <!-- Table Content -->
              <label for="total-row" class="mb-3"
                >Showing 5 of 5 Entry(s)</label
              >
              <div class="table-container">
                <table
                  class="table table-hover table-bordered table-responsive"
                >
                  <thead>
                    <tr>
                      <th scope="col-auto">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </th>
                      <th scope="col" style="width: 5%">
                        <div class="row">
                          <div class="col">Employe Name</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col">
                        <div class="row">
                          <div class="col">Dealer</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Item 1 -->
                    <tr>
                      <td scope="row">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>
                      <td>
                        Hubert Blaine Wolfeschlegel- steinhausenbergerdorff
                      </td>
                      <td>Plaza Toyota - Plaza Toyota Karanggan</td>
                      <td>
                        <div class="row mx-0">
                          <div class="col px-0">
                            <button
                              type="button"
                              class="btn btn-sm btn-warning"
                            >
                              Accept
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <!-- Item 2 -->
                    <tr>
                      <td scope="row">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>
                      <td>
                        Hubert Blaine Wolfeschlegel- steinhausenbergerdorff
                      </td>
                      <td>Plaza Toyota - Plaza Toyota Karanggan</td>
                      <td>
                        <div class="row mx-0">
                          <div class="col px-0">
                            <button
                              type="button"
                              class="btn btn-sm btn-warning"
                            >
                              Accept
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Quota -->
          <div class="col-md-6">
            <!-- Table -->
            <div class="card p-4">
              <!-- Table Header -->
              <div class="row">
                <div class="col">
                  <h2>Quota</h2>
                </div>
              </div>
              <hr />
              <!-- Table Content -->
              <label for="total-row" class="mb-3"
                >Showing 5 of 5 Entry(s)</label
              >
              <div class="table-container">
                <table
                  class="table table-hover table-bordered table-responsive"
                >
                  <thead>
                    <tr>
                      <th scope="col-auto">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </th>
                      <th scope="col" style="width: 5%">
                        <div class="row">
                          <div class="col">Employe Name</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col">
                        <div class="row">
                          <div class="col">Dealer</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Item 1 -->
                    <tr>
                      <td scope="row">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>
                      <td>
                        Hubert Blaine Wolfeschlegel- steinhausenbergerdorff
                      </td>
                      <td>Plaza Toyota - Plaza Toyota Karanggan</td>
                      <td>
                        <div class="row mx-0">
                          <div class="col px-0">
                            <button type="button" class="btn btn-sm btn-danger">
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <!-- Item 2 -->
                    <tr>
                      <td scope="row">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>
                      <td>
                        Hubert Blaine Wolfeschlegel- steinhausenbergerdorff
                      </td>
                      <td>Plaza Toyota - Plaza Toyota Karanggan</td>
                      <td>
                        <div class="row mx-0">
                          <div class="col px-0">
                            <button type="button" class="btn btn-sm btn-danger">
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Action -->
          <div class="col-12 mt-4">
            <div class="card p-4">
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
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
  name: "Manage Training Process List",
  components: {
    Sidebar,
    Navbar,
  },
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "MyLearning.scss";
</style>
