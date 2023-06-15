<template>
  <!--round chart showed on first dashboard-->
  <!--begin::Mixed Widget 5-->
  <div :class="widgetClasses" class="card">
    <!--begin::Beader-->
    <!--begin::Toolbar-->
    <div class="card-toolbar text-center mt-5" data-kt-buttons="true">
      <a
        class="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
        id="kt_charts_widget_2_year_btn"
        >Year</a
      >

      <a
        class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
        id="kt_charts_widget_2_month_btn"
        >Month</a
      >

      <a
        class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
        id="kt_charts_widget_2_week_btn"
        >Week</a
      >
    </div>

    <!--end::Toolbar-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1"
          >CO2 Emission
          <i class="fab fa-cloudversify fa-lg text-dark"></i>
        </span>
        <div class="d-flex flex-row mt-2">
          <div class="p-2 border-gray-300 border-end-dashed">
            <span class="fw-bolder fs-1 text-primary">880</span>
          </div>
          <div class="p-3">
            <span class="fw-bolder fs-7 mt-1 text-gray-600"
              >Last Month: 1000</span
            >
          </div>
        </div>
        <div class="border border-success p-3 mt-2">
          <div class="fs-6">Change</div>
          <div class="row text-success mt-1">
            <div class="col p-2 fs-2">15%</div>
            <div class="col p-2">
              <i class="bi bi-graph-down-arrow fa-lg text-success"></i>
            </div>
          </div>
        </div>
      </h3>

      <div class="card-toolbar">
        <!--begin::Menu-->

        <!-- <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown3></Dropdown3> -->
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body d-flex flex-column pt-0">
      <!--begin::Chart-->

      <div class="flex-grow-1 mt-0">
        <!--begin::Chart-->
        <apexchart
          class="mixed-widget-7-chart"
          :options="chartOptions"
          :series="series"
          width="100%"
          type="donut"
        ></apexchart>
        <!--end::Chart-->
      </div>

      <!-- <apexchart
        class="mixed-widget-5-chart card-rounded-top"
        :options="chartOptions"
        :series="series"
        type="area"
        :height="chartHeight"
      ></apexchart> -->
      <!--end::Chart-->
    </div>
  </div>
  <!--end::Body-->
  <!-- </div> -->
  <!--end::Mixed Widget 5-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
//import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-72",
  components: {
    //Dropdown3,
  },
  props: {
    widgetClasses: String,
    chartColor: String,
    chartHeight: String,
    btnColor: String,
  },
  setup(props) {
    const color = ref(props.chartColor);

    const labelColor = getCSSVariableValue("--bs-" + "gray-800");
    // const strokeColor = getCSSVariableValue("--bs-" + "gray-300");
    // const baseColor = getCSSVariableValue("--bs-" + color.value);
    const lightColor = getCSSVariableValue("--bs-light-" + color.value);

    const chartOptions = {
      chart: {
        fontFamily: "inherit",
        width: 340,
        type: "donut",
        //height: props.chartHeight,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "65%",
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: false,
              fontWeight: "700",
            },
            value: {
              color: labelColor,
              fontSize: "12px",
              fontWeight: "700",
              offsetY: 12,
              show: true,
              formatter: function (val) {
                return val + "";
              },
            },
          },
          track: {
            background: lightColor,
            strokeWidth: "100%",
          },
        },
      },
      colors: ["#ED5450", "#5BC451", "#F95700FF"],

      stroke: {
        lineCap: "round",
      },
      labels: ["1", "2", " 3"],
    };

    const series = [880, 200, 300];

    return {
      series,
      chartOptions,
    };
  },
});
</script>
