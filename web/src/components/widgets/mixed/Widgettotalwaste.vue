<template>
  <!--begin::List Widget 1-->
  <div :class="widgetClasses" class="card h-100">
    <!--begin::Body-->
    <div class="card-body p-0">
      <!--begin::Header-->
      <div :class="`bg-${widgetColor}`" class="px-9 card-rounded w-100">
        <!--Start ux code-->

        <div class="row pt-5">
          <!--main col1 -->
          <div class="col-sm-12 boarder">
            <div class="row h2 text-primary pt-3 pb-5 border-bottom">
              <div class="col-9">Total Waste Collected</div>
              <div class="col-3 text-danger">617 Kt</div>
            </div>
            <div class="divider pb-2"></div>
            <div class="row">
              <div class="col">
                <div class="col-7">
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
                <div class="col-5"></div>
              </div>

              <div class="col">
                <div class="row">
                  <div class="col-7 h4 text-primary"></div>
                  <div class="col-5 h4"></div>
                </div>
                <div class="row">
                  <div class="col-7 h4 text-primary"></div>
                  <div class="col h5"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <apexchart
                type="area"
                :height="180"
                :options="options"
                :series="series"
              ></apexchart>
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
    // const baseColor = getCSSVariableValue("--bs-primary");
    // const secondaryColor = getCSSVariableValue("--bs-gray-300");

    const options = {
      chart: {
        fontFamily: "inherit",
        type: "area",
        hight: 200,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {},
      legend: {
        show: true,
        style: { colors: ["#00A4CCFF", "#fbc531"] },
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
          text: "$",
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      fill: {},
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
            return "" + val + " $";
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
        name: "T.Cost",
        data: [120, 110, 100, 90, 75, 55, 40, 69, 91],
      },
    ];

    return {
      options,
      series,
    };
  },
});
</script>
