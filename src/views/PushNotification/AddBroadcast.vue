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
      <div class="col p-4 container-tam container-push-notification">
        <!-- Header -->
        <div class="row">
          <div class="col-auto">
            <h1 class="mb-4">Push Notification</h1>
          </div>
          <div class="col-auto px-0">></div>
          <div class="col-auto">
            <h1 class="mb-4 text-primary">Add Broadcast</h1>
          </div>
        </div>
        <!-- Reward Information -->
        <div class="card p-4">
          <!-- Content Header -->
          <div class="row">
            <div class="col">
              <h2>Add Broadcast</h2>
            </div>
          </div>
          <hr />
          <!-- Content -->
          <div class="row">
            <!-- Receipent -->
            <div class="col-12 mb-3">
              <div class="mb-2"><b>To</b></div>
              <div class="radio-toolbar">
                <input
                  type="radio"
                  id="radio1"
                  name="radios"
                  value="all"
                  checked
                />
                <label for="radio1">All</label>

                <input type="radio" id="radio2" name="radios" value="false" />
                <label for="radio2">Dealer</label>

                <input type="radio" id="radio3" name="radios" value="true" />
                <label for="radio3">TAM</label>

                <input type="radio" id="radio4" name="radios" value="true" />
                <label for="radio4">Others</label>
              </div>
            </div>
            <!-- Title -->
            <div class="col-12 mb-3">
              <div class="mb-1"><b>Title</b></div>
              <input
                class="mt-2 form-control"
                type="text"
                placeholder="Input Title"
              />
            </div>
            <!-- Group Position: If All not checked -->
            <div class="col-12 mb-3">
              <div class="mb-2"><b>Group Position</b></div>
              <!-- All List Group Positiion -->
              <div class="checkbox-toolbar">
                <label for="group-position-1">
                  <input
                    type="checkbox"
                    id="group-position-1"
                    name="group-position"
                  />
                  <p>Engineer</p>
                </label>

                <label for="group-position-2">
                  <input
                    type="checkbox"
                    id="group-position-2"
                    name="group-position"
                  />
                  <p>Junior Engineer</p>
                </label>

                <label for="group-position-3">
                  <input
                    type="checkbox"
                    id="group-position-3"
                    name="group-position"
                  />
                  <p>Senior Engineer</p>
                </label>

                <label for="group-position-4">
                  <input
                    type="checkbox"
                    id="group-position-4"
                    name="group-position"
                  />
                  <p>Old Engineer</p>
                </label>
              </div>
            </div>
            <!-- Man Power: If All not checked -->
            <div class="col-12 mb-3">
              <div class="mb-2"><b>Manpower Position</b></div>
              <!-- All List Manpower Position -->
              <div class="checkbox-toolbar">
                <label for="manpower-position-1">
                  <input
                    type="checkbox"
                    id="manpower-position-1"
                    name="manpower-position"
                  />
                  <p>Engineer</p>
                </label>

                <label for="manpower-position-2">
                  <input
                    type="checkbox"
                    id="manpower-position-2"
                    name="manpower-position"
                  />
                  <p>Junior Engineer</p>
                </label>

                <label for="manpower-position-3">
                  <input
                    type="checkbox"
                    id="manpower-position-3"
                    name="manpower-position"
                  />
                  <p>Senior Engineer</p>
                </label>

                <label for="manpower-position-4">
                  <input
                    type="checkbox"
                    id="manpower-position-4"
                    name="manpower-position"
                  />
                  <p>Old Engineer</p>
                </label>
              </div>
            </div>
            <!-- Message -->
            <div class="col-12 mb-3">
              <div class="mb-1"><b>Message</b></div>
              <textarea
                name="how-to-user"
                id="how-to-user"
                class="mt-2 broadcast"
                rows="5"
                placeholder="Type something..."
              ></textarea>
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
  name: "Add Broadcast",
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
@import "PushNotification.scss";
</style>
