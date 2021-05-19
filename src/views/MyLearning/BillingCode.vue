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
      <div class="col p-4 container-tam container-billing-code">
        <!-- Header -->
        <div class="row">
          <div class="col-auto">
            <h1 class="mb-4">My Learning</h1>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <h1 class="mb-4 text-primary">Billing Code</h1>
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
        <!-- Table -->
        <div class="card p-4">
          <!-- Table Header -->
          <div class="row">
            <div class="col">
              <h2>Billing Code</h2>
            </div>
            <div class="col-auto px-0">
              <button type="button" class="btn btn-sm btn-danger text-white">
                Delete
              </button>
            </div>
            <div class="col-auto">
              <button type="button" class="btn btn-sm btn-primary text-white">
                Bulk Update
              </button>
            </div>
          </div>
          <hr />
          <!-- Table Content -->
          <label for="total-row" class="mb-3">Showing 5 of 5 Entry(s)</label>
          <div class="table-container">
            <table class="table table-hover table-bordered table-responsive">
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
                  <th scope="col">
                    <div class="row">
                      <div class="col">Billing Code</div>
                      <div class="col-auto">
                        <span
                          ><i class="fa fa-sort" aria-hidden="true"></i
                        ></span>
                      </div>
                    </div>
                  </th>
                  <th scope="col">
                    <div class="row">
                      <div class="col">Course</div>
                      <div class="col-auto">
                        <span
                          ><i class="fa fa-sort" aria-hidden="true"></i
                        ></span>
                      </div>
                    </div>
                  </th>
                  <th scope="col">
                    <div class="row">
                      <div class="col">Accomodation</div>
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
                  <th scope="col">
                    <div class="row">
                      <div class="col">Amount</div>
                      <div class="col-auto">
                        <span
                          ><i class="fa fa-sort" aria-hidden="true"></i
                        ></span>
                      </div>
                    </div>
                  </th>
                  <th scope="col">
                    <div class="row">
                      <div class="col">Participant</div>
                      <div class="col-auto">
                        <span
                          ><i class="fa fa-sort" aria-hidden="true"></i
                        ></span>
                      </div>
                    </div>
                  </th>
                  <th scope="col">
                    <div class="row">
                      <div class="col">Approver</div>
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
                  <td scope="col-auto">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                  <td>T-MT021-1-5090</td>
                  <td><a href="#">Body Repair-New Step 2 (Pro Tech)</a></td>
                  <td>Triple Share</td>
                  <td>04 Jan 2021</td>
                  <td>325000 IDR</td>
                  <td>John Doe</td>
                  <td>Fauzi Ojoy</td>
                  <td>
                    <div class="row mx-0">
                      <div class="col-auto px-0">
                        <button type="button" class="btn btn-sm btn-warning">
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
                <!-- Item 2 -->
                <tr>
                  <td scope="col-auto">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                  <td>T-MT021-1-5090</td>
                  <td><a href="#">Body Repair-New Step 2 (Pro Tech)</a></td>
                  <td>Triple Share</td>
                  <td>04 Jan 2021</td>
                  <td>325000 IDR</td>
                  <td>John Doe</td>
                  <td>Fauzi Ojoy</td>
                  <td>
                    <div class="row mx-0">
                      <div class="col-auto px-0">
                        <button type="button" class="btn btn-sm btn-warning">
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
  name: "Billing Code",
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
@import "MyLearning.scss";
</style>
