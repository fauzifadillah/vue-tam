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
      <div class="col p-4 container-tam container-grouping">
        <!-- Header -->
        <div class="row">
          <div class="col-auto">
            <h1 class="mb-4">CMS</h1>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <h1 class="mb-4 text-primary">Grouping</h1>
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
          <div class="col">
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
          <!-- Add -->
          <div class="col d-flex justify-content-end">
            <button type="button" class="btn btn-primary">+ Add</button>
          </div>
        </div>
        <!-- Table -->
        <div class="card p-4">
          <!-- Table Header -->
          <div class="row">
            <div class="col">
              <h2>Grouping List</h2>
            </div>
          </div>
          <hr />
          <!-- Table Content -->
          <label for="total-row" class="mb-3">Showing 5 of 5 Entry(s)</label>
          <div class="table-container">
            <table class="table table-hover table-bordered table-responsive">
              <thead>
                <tr>
                  <th scope="col">
                    <div class="row">
                      <div class="col">Position Group / Position</div>
                      <div class="col-auto">
                        <span
                          ><i class="fa fa-sort" aria-hidden="true"></i
                        ></span>
                      </div>
                    </div>
                  </th>
                  <th scope="col">
                    <div class="row">
                      <div class="col">Created Date</div>
                      <div class="col-auto">
                        <span
                          ><i class="fa fa-sort" aria-hidden="true"></i
                        ></span>
                      </div>
                    </div>
                  </th>
                  <th scope="col" style="width: 25%">Action</th>
                </tr>
              </thead>
              <tbody>
                <!-- Item 1 -->
                <tr
                  data-toggle="collapse"
                  data-target="#position-1"
                  class="accordion-toggle"
                >
                  <td>
                    <span><i class="fa fa-angle-down"></i></span> &nbsp; Sales
                    Executive
                  </td>
                  <td>19/02/2021 10:22</td>
                  <td>
                    <div class="row mx-0">
                      <div class="col-auto">
                        <button type="button" class="btn btn-sm btn-info">
                          Edit
                        </button>
                      </div>
                      <div class="col px-0">
                        <button type="button" class="btn btn-sm btn-danger">
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <!-- Sub Item 1 -->
                <tr class="panel-collapse collapse" id="position-1">
                  <td>
                    <span class="text-white"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    &nbsp; Junior Sales Executive
                  </td>
                  <td>19/02/2021 10:22</td>
                  <td>
                    <div class="row mx-0">
                      <div class="col-auto">
                        <button type="button" class="btn btn-sm btn-info">
                          Edit
                        </button>
                      </div>
                      <div class="col px-0">
                        <button type="button" class="btn btn-sm btn-danger">
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <!-- Sub Item 2 -->
                <tr class="panel-collapse collapse" id="position-1">
                  <td>
                    <span class="text-white"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    &nbsp; Junior Gas Executive
                  </td>
                  <td>19/02/2021 10:22</td>
                  <td>
                    <div class="row mx-0">
                      <div class="col-auto">
                        <button type="button" class="btn btn-sm btn-info">
                          Edit
                        </button>
                      </div>
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
          <!-- Table Footer -->
          <div class="row mt-2">
            <!-- Set Showed Data Per Page -->
            <div class="col row">
              <div class="col-auto d-flex align-items-center">Show</div>
              <div class="col-2">
                <select class="form-select show-entries" aria-label="select">
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
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  name: "Grouping",
  components: {
    Sidebar,
    Navbar,
    VPagination,
  },
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "CMS.scss";
</style>
