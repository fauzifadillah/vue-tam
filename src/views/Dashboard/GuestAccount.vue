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
      <div class="col p-4 container-tam container-guest-account">
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
            <div class="dropdown mb-4">
              <a
                class="dropdown-toggle"
                href="#"
                role="button"
                id="accountList"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TAM People
              </a>

              <ul class="dropdown-menu" aria-labelledby="accountList">
                <li><a class="dropdown-item" href="#">Ojoy</a></li>
                <li><a class="dropdown-item" href="#">Fauzi</a></li>
                <li>
                  <a class="dropdown-item" href="#">Fadillah</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Content -->
        <div class="row">
          <!-- Chart -->
          <div class="col-5 d-flex mb-4">
            <div class="card p-4">
              <!-- Chart Header -->
              <div class="row">
                <div class="col">
                  <h2>Total Guest Account</h2>
                </div>
              </div>
              <!-- Chart -->
              <hr />
              <div>
                <pie
                  :labels="chart.labels"
                  :data="chart.data"
                  :backgroundColor="chart.backgroundColor"
                />
              </div>
            </div>
          </div>
          <!-- Dealers & Others -->
          <div class="col-7 row mb-4">
            <!-- Dealers -->
            <div class="col-12 mb-4">
              <div class="card p-4">
                <!-- Dealer Header -->
                <div class="row">
                  <div class="col">
                    <h2>Dealer</h2>
                  </div>
                </div>
                <hr />
                <!-- Filter Search -->
                <div class="row mb-3">
                  <!-- Filter -->
                  <div class="col-auto">
                    <button type="button" class="btn btn-info text-white">
                      Filter
                    </button>
                  </div>
                  <!-- Search Bar -->
                  <div class="col">
                    <form class="d-flex">
                      <input
                        class="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                </div>
                <!-- Table -->
                <div class="table-container">
                  <table
                    class="table table-hover table-bordered table-responsive"
                  >
                    <thead>
                      <tr>
                        <th scope="col">
                          <div class="row">
                            <div class="col">Status</div>
                            <div class="col-auto">
                              <span
                                ><i class="fa fa-sort" aria-hidden="true"></i
                              ></span>
                            </div>
                          </div>
                        </th>
                        <th scope="col">
                          <div class="row">
                            <div class="col">Done</div>
                            <div class="col-auto">
                              <span
                                ><i class="fa fa-sort" aria-hidden="true"></i
                              ></span>
                            </div>
                          </div>
                        </th>
                        <th scope="col">
                          <div class="row">
                            <div class="col">Pending</div>
                            <div class="col-auto">
                              <span
                                ><i class="fa fa-sort" aria-hidden="true"></i
                              ></span>
                            </div>
                          </div>
                        </th>
                        <th scope="col">
                          <div class="row">
                            <div class="col">Total MP</div>
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
                        <td>Unverified</td>
                        <td>15</td>
                        <td>15</td>
                        <td>15</td>
                      </tr>
                      <!-- Item 2 -->
                      <tr>
                        <td>Unverified</td>
                        <td>15</td>
                        <td>15</td>
                        <td>15</td>
                      </tr>
                      <!-- Item 3 -->
                      <tr>
                        <td>Unverified</td>
                        <td>15</td>
                        <td>15</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- Others -->
            <div class="col-12">
              <div class="card p-4">
                <!-- Dealer Header -->
                <div class="row">
                  <div class="col">
                    <h2>Others</h2>
                  </div>
                </div>
                <hr />
                <!-- Filter Search -->
                <div class="row mb-3">
                  <!-- Filter -->
                  <div class="col-auto">
                    <button type="button" class="btn btn-info text-white">
                      Filter
                    </button>
                  </div>
                  <!-- Search Bar -->
                  <div class="col">
                    <form class="d-flex">
                      <input
                        class="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                </div>
                <!-- Table -->
                <div class="table-container">
                  <table
                    class="table table-hover table-bordered table-responsive"
                  >
                    <thead>
                      <tr>
                        <th scope="col">
                          <div class="row">
                            <div class="col">Status</div>
                            <div class="col-auto">
                              <span
                                ><i class="fa fa-sort" aria-hidden="true"></i
                              ></span>
                            </div>
                          </div>
                        </th>
                        <th scope="col">
                          <div class="row">
                            <div class="col">Done</div>
                            <div class="col-auto">
                              <span
                                ><i class="fa fa-sort" aria-hidden="true"></i
                              ></span>
                            </div>
                          </div>
                        </th>
                        <th scope="col">
                          <div class="row">
                            <div class="col">Pending</div>
                            <div class="col-auto">
                              <span
                                ><i class="fa fa-sort" aria-hidden="true"></i
                              ></span>
                            </div>
                          </div>
                        </th>
                        <th scope="col">
                          <div class="row">
                            <div class="col">Total MP</div>
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
                        <td>Unverified</td>
                        <td>15</td>
                        <td>15</td>
                        <td>15</td>
                      </tr>
                      <!-- Item 2 -->
                      <tr>
                        <td>Unverified</td>
                        <td>15</td>
                        <td>15</td>
                        <td>15</td>
                      </tr>
                      <!-- Item 3 -->
                      <tr>
                        <td>Unverified</td>
                        <td>15</td>
                        <td>15</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- List Account -->
          <div class="col-12">
            <!-- Table -->
            <div class="card p-4">
              <!-- Table Header -->
              <div class="row">
                <div class="col">
                  <h2>Account</h2>
                </div>
                <!-- Extend Account -->
                <div class="col-auto d-flex justify-content-end">
                  <button type="button" class="btn btn-success">
                    Extend Account
                  </button>
                </div>
                <!-- Suspend Account -->
                <div class="col-auto d-flex justify-content-end px-0">
                  <button type="button" class="btn btn-danger">
                    Suspend Account
                  </button>
                </div>
                <!-- Upgrade Accout -->
                <div class="col-auto d-flex justify-content-end">
                  <button type="button" class="btn btn-warning">
                    Upgrade Account
                  </button>
                </div>
                <!-- Export to xls/csv -->
                <div class="col-auto d-flex justify-content-end px-0">
                  <button type="button" class="btn btn-primary">
                    Export to xls.
                  </button>
                </div>
              </div>
              <hr />
              <!-- Search Bar and Button -->
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
                      <span
                        ><i class="fa fa-search" aria-hidden="true"></i
                      ></span>
                    </button>
                  </form>
                </div>
              </div>
              <!-- Table Content -->
              <label for="total-row" class="mb-3"
                >Showing 5 of 5 Entry(s)</label
              >
              <div class="table-container">
                <table
                  class="
                    long-table
                    table table-hover table-bordered table-responsive
                  "
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
                      <th scope="col" style="width: 14%">
                        <div class="row">
                          <div class="col">Email</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col">
                        <div class="row">
                          <div class="col">Name</div>
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
                      <th scope="col">
                        <div class="row">
                          <div class="col">Outlet</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col">
                        <div class="row">
                          <div class="col">Registered Date</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col">
                        <div class="row">
                          <div class="col">Status</div>
                          <div class="col-auto">
                            <span
                              ><i class="fa fa-sort" aria-hidden="true"></i
                            ></span>
                          </div>
                        </div>
                      </th>
                      <th scope="col" style="width: 20%">Action</th>
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
                      <td>ojoy@gmail.com</td>
                      <td>Fauzi Ojoy</td>
                      <td>Auto 2000</td>
                      <td>Cilandak</td>
                      <td>19/02/2022 10:23</td>
                      <td>Active</td>
                      <td>
                        <div class="row mx-0">
                          <div class="col-auto px-0">
                            <button
                              type="button"
                              class="btn btn-sm btn-warning"
                            >
                              View Detail
                            </button>
                          </div>
                          <div class="col-auto">
                            <button type="button" class="btn btn-sm btn-info">
                              Edit
                            </button>
                          </div>
                        </div>
                      </td>
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
import Pie from "@/components/Charts/Pie.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  name: "Guest Account",
  components: {
    Sidebar,
    Navbar,
    Pie,
    VPagination,
  },
  data() {
    return {
      chart: {
        data: [10, 20, 30, 40],
        labels: ["Suspended", "Upgraded", "Verified", "Unverified"],
        backgroundColor: ["#55B5FF", "#0085CA", "#60D408", "#ffc107"],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "Dashboard.scss";
</style>
