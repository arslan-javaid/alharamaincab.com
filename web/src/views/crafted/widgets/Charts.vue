<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-6">
      <MixedWidget10
        widget-classes="card-xl-stretch mb-xl-8"
        chart-color="primary"
        chart-height="300"
      ></MixedWidget10>
    </div>
    <!--end::Row-->

    <!--Watage Collected by types -->
    <div class="col-xl-6">
      <ChartsWidget2 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget2>
    </div>
  </div>
  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-6">
      <ChartsWidget1 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget1>
    </div>
    <div class="col-xl-6">
      <ChartsWidget3 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget3>
    </div>
  </div>
  <!--end::Row-->
  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <div class="col-xl-6">
      <ChartsWidget3copy
        widget-classes="card-xl-stretch mb-xl-8"
      ></ChartsWidget3copy>
    </div>
  </div>
  <!--end::Row-->
  <!--begin::Row-->
  <div class="row g-5 g-xl-8">
    <!-- <div class="col-xl-6">
      <ChartsWidget8cost
        widget-classes="card-xl-stretch mb-xl-8"
      ></ChartsWidget8cost>
    </div> -->
  </div>
  <!--end::Row-->
  <!--begin::Row-->
  <!-- <div class="row g-5 g-xl-8">
    <div class="col-xl-6">
      <ChartsWidget5 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget5>
    </div> -->
  <!-- <div class="col-xl-6">
      <ChartsWidget6 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget6>
    </div>-->
  <!-- </div>  -->
  <!--end::Row-->

  <!--begin::Row-->
  <!-- <div class="row g-5 g-xl-8">
    <div class="col-xl-6">
      <ChartsWidget7 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget7>
    </div>
    <div class="col-xl-6">
      <ChartsWidget4 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget4>
    </div>
  </div> -->
  <!--end::Row-->
  <!--begin::Row-->
  <!-- <div class="row g-5 g-xl-8">
    <div class="col-xl-6">
      <ChartsWidget7 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget7>
    </div>
    <div class="col-xl-6">
      <ChartsWidget8 widget-classes="card-xl-stretch mb-xl-8"></ChartsWidget8>
    </div>
  </div> -->
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import ChartsWidget1 from "@/components/widgets/charts/Widget1.vue";
import ChartsWidget2 from "@/components/widgets/charts/Widget2.vue";
import ChartsWidget3 from "@/components/widgets/charts/Widget3.vue";
import ChartsWidget3copy from "@/components/widgets/charts/Widget3copy.vue";
import MixedWidget10 from "@/components/widgets/mixed/Widget10.vue";
//import ChartsWidget4 from "@/components/widgets/charts/Widget4.vue";
//import ChartsWidget5 from "@/components/widgets/charts/Widget5.vue";
//import ChartsWidget6 from "@/components/widgets/charts/Widget6.vue";
//import ChartsWidget7 from "@/components/widgets/charts/Widget7.vue";
//import ChartsWidget8 from "@/components/widgets/charts/Widget8.vue";
//import ChartsWidget8cost from "@/components/widgets/charts/Widget8cost.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { MenuComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "widgets-chart",
  components: {
    ChartsWidget1,
    ChartsWidget2,
    ChartsWidget3,
    ChartsWidget3copy,
    MixedWidget10,
    //ChartsWidget4,
    //ChartsWidget5,
    //ChartsWidget6,
    //ChartsWidget7,
    //ChartsWidget8,
    //ChartsWidget8cost,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Charts", ["Widgets"]);

      MenuComponent.reinitialization();
    });
  },
});
</script>
