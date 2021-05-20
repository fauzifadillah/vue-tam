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
      <div class="col p-4 container-tam container-rewards">
        <!-- Header -->
        <div class="row">
          <div class="col-auto">
            <h1 class="mb-4">Rewards</h1>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <h1 class="mb-4 text-primary">Add Reward</h1>
          </div>
        </div>
        <!-- Reward Information -->
        <div class="card p-4">
          <!-- Content Header -->
          <div class="row">
            <div class="col">
              <h2>Reward Information</h2>
            </div>
          </div>
          <hr />
          <!-- Content -->
          <div class="row">
            <!-- Left -->
            <div class="col-6">
              <div class="row">
                <!-- Reward Name -->
                <div class="col-12 mb-3">
                  <div class="mb-1"><b>Reward Name</b></div>
                  <input
                    class="mt-2 form-control"
                    type="text"
                    placeholder="Input Reward Name"
                  />
                </div>
                <!-- Type of Reward -->
                <div class="col-6 mb-3">
                  <div class="mb-1"><b>Type of Reward</b></div>
                  <select class="form-select mt-2" id="gender">
                    <option>Choose Type...</option>
                    <option value="male" selected>Tutorial Web Admin</option>
                    <option value="female">Tutorial Web User</option>
                  </select>
                </div>
                <!-- Period -->
                <div class="col-6 mb-3">
                  <div class="mb-1"><b>Period</b></div>
                  <div class="mt-2"><datepicker v-model="picked" /></div>
                </div>
                <!-- Cover Image -->
                <div class="col-12 mb-3">
                  <div class="mb-1"><b>Cover Image</b></div>
                  <div class="mt-2">
                    <input class="form-control" type="file" id="formFile" />
                    <label for="formFile" class="form-label text-danger mt-3"
                      >*Recommended File: PDF, JPEG, JPG, PNG, MP4</label
                    >
                    <br />
                    <label for="formFile" class="form-label text-danger"
                      >*Max File Size: 100MB</label
                    >
                  </div>
                </div>
                <!-- Type of Point & Required Point -->
                <div class="col-12 mb-3">
                  <!-- Header -->
                  <div class="row">
                    <div class="col-6">
                      <div class="mb-1"><b>Type of Point</b></div>
                    </div>
                    <div class="col-6">
                      <div class="mb-1"><b>Required Point</b></div>
                    </div>
                  </div>
                  <!-- Content -->
                  <div class="row d-flex align-items-center">
                    <!-- Teaching Point -->
                    <div class="col-1">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                    </div>
                    <div class="col-5">Teaching Point</div>
                    <div class="col-6 mb-2">
                      <input
                        class="mt-2 form-control"
                        type="text"
                        placeholder="Input Number"
                      />
                    </div>
                    <!-- Learning Point -->
                    <div class="col-1">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                    </div>
                    <div class="col-5">Learning Point</div>
                    <div class="col-6 mb-2">
                      <input
                        class="mt-2 form-control"
                        type="text"
                        placeholder="Input Number"
                      />
                    </div>
                    <!-- Total Point -->
                    <div class="col-1">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                    </div>
                    <div class="col-5">Total Point</div>
                    <div class="col-6 mb-2">
                      <input
                        class="mt-2 form-control"
                        type="text"
                        placeholder="Input Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right -->
            <div class="col-6 row">
              <!-- Reward Description -->
              <div class="col-12 mb-3">
                <div class="mb-1"><b>Reward Description</b></div>
                <textarea
                  name="description"
                  id="description"
                  class="mt-2"
                  rows="5"
                  placeholder="Type something..."
                ></textarea>
              </div>
              <!-- Terms & Conditions -->
              <div class="col-12 mb-3">
                <div class="mb-1"><b>Terms & Conditions</b></div>
                <textarea
                  name="terms-and-condition"
                  id="terms-and-condition"
                  class="mt-2"
                  rows="5"
                  placeholder="Type something..."
                ></textarea>
              </div>
              <!-- How to User -->
              <div class="col-12 mb-3">
                <div class="mb-1"><b>How to User</b></div>
                <textarea
                  name="how-to-user"
                  id="how-to-user"
                  class="mt-2"
                  rows="5"
                  placeholder="Type something..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <!-- Table File Upload -->
        <div class="card p-4 mt-4">
          <!-- Table Header -->
          <div class="row">
            <div class="col">
              <h2>File Upload</h2>
            </div>
            <div class="col-auto">
              <button
                type="button"
                class="btn btn-sm btn-primary"
                data-toggle="modal"
                data-target="#uploadFileModal"
              >
                + File Upload
              </button>
            </div>
            <div class="col-auto">
              <button type="button" class="btn btn-sm btn-danger">
                Delete
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
                  <th scope="col" style="width: 10%">
                    <div class="row">
                      <div class="col">Type</div>
                      <div class="col-auto">
                        <span
                          ><i class="fa fa-sort" aria-hidden="true"></i
                        ></span>
                      </div>
                    </div>
                  </th>
                  <th scope="col" style="width: 15%">
                    <div class="row">
                      <div class="col">Title</div>
                      <div class="col-auto">
                        <span
                          ><i class="fa fa-sort" aria-hidden="true"></i
                        ></span>
                      </div>
                    </div>
                  </th>
                  <th scope="col" style="width: 12.5%">
                    <div class="row">
                      <div class="col">File</div>
                      <div class="col-auto">
                        <span
                          ><i class="fa fa-sort" aria-hidden="true"></i
                        ></span>
                      </div>
                    </div>
                  </th>
                  <th scope="col" style="width: 15%">
                    <div class="row">
                      <div class="col">Created Date</div>
                      <div class="col-auto">
                        <span
                          ><i class="fa fa-sort" aria-hidden="true"></i
                        ></span>
                      </div>
                    </div>
                  </th>
                  <th scope="col" style="width: 15%">
                    <div class="row">
                      <div class="col">Updated Date</div>
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
                  <td>Image</td>
                  <td>Lorem Ipsum Dolor sit Ametum</td>
                  <td><a href="#">wa_01234.jpg</a></td>
                  <td>19/02/2021 10:22</td>
                  <td>19/02/2022 10:23</td>
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
                  <td>Image</td>
                  <td>Lorem Ipsum Dolor sit Ametum</td>
                  <td><a href="#">wa_01234.jpg</a></td>
                  <td>19/02/2021 10:22</td>
                  <td>19/02/2022 10:23</td>
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
        <!-- Action -->
        <div class="card p-4 mt-4">
          <div class="row d-flex justify-content-end">
            <div class="col-auto">
              <button type="button" class="btn btn-sm btn-danger">Close</button>
            </div>
            <div class="col-auto">
              <button type="button" class="btn btn-sm btn-success">Save</button>
            </div>
            <div class="col-auto">
              <button type="button" class="btn btn-sm btn-info">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- File Upload Modal -->
    <div
      class="modal fade"
      id="uploadFileModal"
      tabindex="-1"
      aria-labelledby="uploadFileModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content p-2">
          <div class="modal-header">
            <h2 class="modal-title" id="uploadFileModalLabel">Add File</h2>
            <button
              type="button"
              class="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- Title -->
            <div class="row">
              <div class="col-12 mb-4">
                <div class="mb-1"><b>Title</b></div>
                <input
                  class="mt-2 form-control"
                  type="text"
                  placeholder="Input Reward Name"
                />
              </div>
              <!-- File Upload -->
              <div class="row">
                <div class="mb-1"><b>Upload Image</b></div>
                <div class="mt-2">
                  <input class="form-control" type="file" id="formFile" />
                  <label for="formFile" class="form-label text-danger mt-3"
                    >*Recommended File: PDF, JPEG, JPG, PNG, MP4</label
                  >
                  <br />
                  <label for="formFile" class="form-label text-danger"
                    >*Max File Size: 100MB</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Save</button>
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
  name: "Add Reward",
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
@import "Rewards.scss";
</style>
