<template>
  <!--begin::Charts Widget 2-->
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
    <div class="card-header border-0 mt-2">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">
          Total Weight of Garbage Generated
          <i
            class="bi bi-trash-fill fa-sm text-primary"
            style="font-size: 1.5rem"
          ></i>
        </span>
        <!--new fits -->
        <div class="d-flex flex-row mt-2">
          <div class="p-2 border-gray-300 border-end-dashed">
            <span class="fw-bolder fs-1 text-primary">190 Kg</span>
          </div>
          <div class="p-3">
            <span class="fw-bolder fs-7 mt-1 text-gray-600"
              >Last Month: 200 Kg</span
            >
          </div>
        </div>
        <div class="border border-success p-3 mt-2">
          <div class="fs-6">Change</div>
          <div class="row text-success mt-1">
            <div class="col p-2 fs-2">5%</div>
            <div class="col p-2">
              <i class="bi bi-graph-down-arrow fa-lg text-success"></i>
            </div>
          </div>
        </div>
      </h3>

      <!--Building choose Start-->
      <div class="dropdown mt-3">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select Building
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">Builing 1</button>
          <button class="dropdown-item" type="button">Builing 2</button>
          <button class="dropdown-item" type="button">Builing 3</button>
          <button class="dropdown-item" type="button">Builing 4</button>
          <button class="dropdown-item" type="button">Builing 5</button>
        </div>
      </div>
      <!--Building choose End-->
      <!--begin::Toolbar-->
      <!-- <div class="card-toolbar" data-kt-buttons="true">
        <a
          class="
            btn btn-sm btn-color-muted btn-active btn-active-primary
            active
            px-4
            me-1
          "
          id="kt_charts_widget_2_year_btn"
          >Year</a
        >

        <a
          class="
            btn btn-sm btn-color-muted btn-active btn-active-primary
            px-4
            me-1
          "
          id="kt_charts_widget_2_month_btn"
          >Month</a
        >

        <a
          class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
          id="kt_charts_widget_2_week_btn"
          >Week</a
        >
      </div> -->
      <!--end::Toolbar-->
    </div>

    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Chart-->
      <apexchart
        type="bar"
        :options="options"
        :series="series"
        height="530"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Charts Widget 2-->
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
    const borderColor = getCSSVariableValue("--bs-gray-200");
    //const baseColor = getCSSVariableValue("--bs-warning");
    //const secondaryColor = getCSSVariableValue("--bs-primary-300");

    const options = {
      chart: {
        fontFamily: "inherit",
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ["55%"],
          endingShape: "rounded",
        },
      },
      legend: {
        show: true,
        style: { colors: ["#00A4CCFF", "#fbc531", "#A07855FF", "#F95700FF"] },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: true,
        },
        labels: {
          style: {
            colors: [],
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        title: {
          text: "Kg",
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      fill: {
        opacity: 1,
        colors: ["#00A4CCFF", "#fbc531", "#A07855FF", "#F95700FF"],
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: true,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return "" + val + " Kg";
          },
        },
      },
      colors: ["#00A4CCFF", "#fbc531", "#A07855FF", "#F95700FF"],
      grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    };

    const series = [
      {
        name: "Glass",
        data: [44, 55, 57, 56, 61, 90, 58],
      },
      {
        name: "Organic",
        data: [76, 85, 101, 98, 87, 32, 105],
      },
      {
        name: "Papper",
        data: [87, 105, 11, 98, 76, 85, 44],
      },
      {
        name: "Plastic",
        data: [76, 45, 40, 23, 66, 24, 34],
      },
    ];
    return {
      options,
      series,
    };
  },
});
</script>
<style>
.fa-weight-hanging {
  color: rgb(204, 110, 22);
}
</style>
