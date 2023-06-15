<template>
  <!--begin::List Widget 1-->
  <div :class="widgetClasses" class="card h-100">
    <!--begin::Body-->
    <div class="card-body p-0">
      <!--begin::Header-->
      <div :class="`bg-${widgetColor}`" class="px-9 card-rounded w-100">
        <!--Start ux code-->

        <div class="row p-5">
          <!--main col1 -->
          <div class="col-sm-12 boarder">
            <div class="row h2 text-primary pt-3 pb-5 border-bottom">
              <div class="col-7">Average fill level on pickup</div>
              <div class="col-5 text-danger">58%</div>
            </div>
            <div class="divider pb-2"></div>
            <div class="row">
              <div class="col">
                <div class="col-4">
                  <div class="border border-danger pt-2 px-3 w-90px">
                    <div class="fs-6">Change</div>
                    <div class="row text-danger">
                      <div class="col p-2 fs-2">22%</div>
                      <div class="col pt-4">
                        <i class="bi bi-graph-up-arrow fa-lg text-danger"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-8"></div>
              </div>

              <div class="col">
                <div class="row">
                  <div class="col-7 h6">This Month</div>
                  <div class="col-1 bg-success"></div>
                </div>
                <div class="row pt-2">
                  <div class="col-7 h6">Previous Month</div>
                  <div class="col-1 bg-primary"></div>
                </div>
              </div>
            </div>
            <div class="row my-20">
              <div class="progress">
                <div
                  class="progress-bar bg-success progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style="width: 60%"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="row">
              <div class="progress">
                <div
                  class="progress-bar bg-primary progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style="width: 100%"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!--end ux code-->
        <!--begin::Heading-->

        <!--end::Heading-->

        <!--begin::Balance-->

        <!--end::Balance-->
      </div>
      <!--end::Header-->

      <!--begin::Items-->

      <!--end::Items-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 1-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";
export default defineComponent({
  name: "widget-1",
  components: {},
  props: {
    widgetClasses: String,
    widgetColor: String,
  },
  setup() {
    const labelColor = getCSSVariableValue("--bs-gray-500");
    const borderColor = getCSSVariableValue("--bs-gray-200");

    return {};
  },
});
</script>
