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
            <router-link :to="'/cms/guide'">
              <h1 class="mb-4 text-primary">Guide</h1>
            </router-link>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <h1 class="mb-4 text-danger">Add Guide</h1>
          </div>
        </div>
        <!-- Content -->
        <div class="card p-4">
          <!-- Content Header -->
          <div class="row">
            <div class="col">
              <h2>Add Guide</h2>
            </div>
          </div>
          <hr />
          <!-- Content -->
          <div class="row">
            <!-- Title -->
            <div class="col-6 mb-3">
              <div class="mb-1"><b>Title</b></div>
              <input
                class="mt-2 form-control"
                type="text"
                placeholder="Input Title"
              />
            </div>
            <!-- Type of Guide -->
            <div class="col-6 mb-3">
              <div class="mb-1"><b>Type of Guide</b></div>
              <select class="form-select mt-2" id="gender">
                <option>Choose Type...</option>
                <option value="male" selected>Tutorial Web Admin</option>
                <option value="female">Tutorial Web User</option>
              </select>
            </div>
            <!-- Description -->
            <div class="col-12 mb-3">
              <div class="mb-1"><b>Description</b></div>
              <textarea
                name="description"
                id="description"
                class="mt-2"
                rows="10"
              ></textarea>
            </div>
            <!-- File Upload -->
            <div class="col-12">
              <div class="mb-1"><b>File Upload</b></div>
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
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
  name: "Landing Page",
  components: {
    Sidebar,
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "CMS.scss";
</style>
