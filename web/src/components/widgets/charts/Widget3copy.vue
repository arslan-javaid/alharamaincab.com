<template>
  <!--begin::Charts Widget 3-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <!--begin::Toolbar-->
    <div class="card-toolbar text-center pt-5" data-kt-buttons="true">
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

    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1"
          >Garbage Types Generated
          <i
            class="bi bi-trash-fill fa-sm text-dark"
            style="font-size: 1.5rem"
          ></i>
        </span>
        <div class="d-flex flex-row mt-2">
          <div class="p-2 border-gray-300 border-end-dashed">
            <span class="fw-bolder fs-1 text-primary">Total: 232</span>
          </div>
          <div class="p-3">
            <span class="fw-bolder fs-7 mt-1 text-gray-600"
              >Last Month: 290</span
            >
          </div>
        </div>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body">
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
    <!--end::Body-->
  </div>
  <!--end::Charts Widget 3-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-1",
  props: {
    widgetClasses: String,
  },
  components: {},
  setup() {
    const labelColor = getCSSVariableValue("--bs-gray-500");
    // const borderColor = getCSSVariableValue("--bs-gray-200");
    // const baseColor = getCSSVariableValue("--bs-info");
    const lightColor = getCSSVariableValue("--bs-light-info");

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
      colors: ["#58D68D", "#61A3F7", "#F95700FF", "#A0A4A0"],

      stroke: {
        lineCap: "round",
      },
      labels: ["700 Organic", "200 Glass", "300 Plastic", "232 Paper"],
    };
    const series = [700, 200, 300, 232];

    return {
      series,
      chartOptions,
    };
  },
});
</script>
