<template>
  <!--begin::List Widget 1-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body p-0">
      <!--begin::Header-->
      <div
        :class="`bg-${widgetColor}`"
        class="px-9 pt-7 card-rounded h-275px w-100"
      >
        <!--Start ux code-->

        <div class="row">
          <!--main col1 -->
          <div class="col-sm-4 p-3 boarder">
            <div class="row h2">Total Cost</div>
            <div class="row h1 text-danger">7.385$</div>
            <div class="row">
              <div class="col h4">Bins Maintainance</div>
              <div class="col h4">1.148$</div>
            </div>
            <div class="row">
              <div class="col h4">Trucks</div>
              <div class="col h4">6.237$</div>
            </div>
            <div class="row h4">Line chart</div>
            <div class="row h4 text-dark">Change</div>
            <div class="row h4 text-danger">
              <div class="col-sm-2">3.36%</div>
              <div class="col-sm-10">
                <i class="bi bi-graph-up-arrow fa-lg text-danger"></i>
              </div>
            </div>
          </div>

          <!--main col2 -->
          <div class="col-sm-8 p-3 bg-dark text-white">
            <div class="row">
              <div class="col-sm-6 p-3 bg-primary text-white">2col</div>
              <div class="col-sm-6 p-3 bg-primary text-white">3col</div>
            </div>

            <div class="row">
              <div class="col-sm-6 p-3 bg-primary text-white">4col</div>
              <div class="col-sm-6 p-3 bg-primary text-white">5col</div>
            </div>
          </div>
        </div>

        <!--end ux code-->
        <!--begin::Heading-->

        <!--end::Heading-->

        <!--begin::Balance-->
        <div
          class="d-flex text-center flex-column text-white pt-8"
          style="top: 450"
        >
          <span class="fw-bold fs-7">You Balance</span>
          <span class="fw-bolder fs-2x pt-1">$37,562.00</span>
        </div>
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

export default defineComponent({
  name: "widget-1",
  components: {},
  props: {
    widgetClasses: String,
    widgetColor: String,
  },
  setup() {
    return {};
  },
});
</script>
