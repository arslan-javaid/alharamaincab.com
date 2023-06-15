<template>
  <!--begin::Charts Widget 3-->
  <div :class="widgetClasses" class="card">
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
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1"
          >Total Bins
          <i
            class="bi bi-trash-fill fa-sm text-dark"
            style="font-size: 1.5rem"
          ></i>
        </span>
        <div class="d-flex flex-row mt-2">
          <div class="p-2 border-gray-300 border-end-dashed">
            <span class="fw-bolder fs-1 text-primary">330</span>
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
      <div class="mt-2">
        <!--begin::Item-->
        <div class="d-flex flex-stack mb-5">
          <!--begin::Section-->
          <div class="d-flex align-items-center me-2">
            <!--begin::Symbol-->
            <div class="symbol symbol-50px me-3">
              <div class="symbol-label bg-light">
                <i class="bi bi-trash-fill fa-2x text-primary"></i>
              </div>
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div>
              <a
                href="#"
                class="fs-6 text-gray-800 text-hover-primary fw-bolder"
                >Total Bins</a
              >
              <!-- <div class="fs-7 text-muted fw-bold mt-1">
                Ricky Hunt, Sandra Trepp
              </div> -->
            </div>
            <!--end::Title-->
          </div>
          <!--end::Section-->

          <!--begin::Label-->
          <div class="badge badge-light fw-bold py-4 px-3">880</div>
          <!--end::Label-->
        </div>
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
        <!--end::Item-->

        <!--begin::Item-->
        <div class="d-flex flex-stack mb-5">
          <!--begin::Section-->
          <div class="d-flex align-items-center me-2">
            <!--begin::Symbol-->
            <div class="symbol symbol-50px me-3">
              <div class="symbol-label bg-light">
                <i class="bi bi-trash-fill fa-2x text-success"></i>
              </div>
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div>
              <a
                href="#"
                class="fs-6 text-gray-800 text-hover-primary fw-bolder"
                >Active Bins</a
              >
              <!-- <div class="fs-7 text-muted fw-bold mt-1">PitStop Emails</div> -->
            </div>
            <!--end::Title-->
          </div>

          <!--end::Section-->

          <!--begin::Label-->
          <div class="badge badge-light fw-bold py-4 px-3">700</div>
          <!--end::Label-->
        </div>
        <div class="progress">
          <div
            class="progress-bar bg-success progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style="width: 75%"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <!--end::Item-->
        <!--begin::Item-->
        <div class="d-flex flex-stack mb-5">
          <!--begin::Section-->
          <div class="d-flex align-items-center me-2">
            <!--begin::Symbol-->
            <div class="symbol symbol-50px me-3">
              <div class="symbol-label bg-light">
                <i class="bi bi-trash fa-2x"></i>
              </div>
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div>
              <a
                href="#"
                class="fs-6 text-gray-800 text-hover-primary fw-bolder"
                >Offline Bins</a
              >
              <!-- <div class="fs-7 text-muted fw-bold mt-1">PitStop Emails</div> -->
            </div>
            <!--end::Title-->
          </div>
          <!--end::Section-->

          <!--begin::Label-->
          <div class="badge badge-light fw-bold py-4 px-3">180</div>
          <!--end::Label-->
        </div>
        <div class="progress">
          <div
            class="progress-bar bg-secondary progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <!--end::Item-->
      </div>
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
      colors: ["#58D68D", "#F95700FF", "#9B59B6"],

      stroke: {
        lineCap: "round",
      },
      labels: ["600 Full Bins", "100 OverFlowing", "50 Garbage Around"],
    };
    const series = [1000, 200, 300];

    return {
      series,
      chartOptions,
    };
  },
});
</script>
